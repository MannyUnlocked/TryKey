"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import BigNumber from 'bignumber.js';
import {
  createQR,
  encodeURL,
  findReference,
  FindReferenceError,
  validateTransfer,
} from "@solana/pay";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

const CONNECTION = new Connection(`https://devnet.helius-rpc.com/?api-key=4fc6ec4e-b017-4bed-98e2-bc5d3d7b6884`, "finalized");

export default function QrCodePayment() {
  const [success, setSuccess] = useState("");
  const [lastTransactionId, setLastTransactionId] = useState(null); // State to store the last transaction ID
  const qrRef = useRef(null);

  const recipient = new PublicKey("37vHKCCzgDhSKoJHE2VYbxDAckJS4Jr6HXcq8oJ7cJJy");
  const amount = new BigNumber(Number(0.1));
  const reference = useMemo(() => Keypair.generate().publicKey, []);
  const label = 'TRYKEY';
  const message = `Payment for Kekenapep Usage.`;
  const memo = 'KEKE VERIFICATION';

  useEffect(() => {
    const solanaUrl = encodeURL({ recipient, amount, reference, label, message, memo });
    const qr = createQR(solanaUrl, 300, "transparent");

    if (qrRef.current) {
      qrRef.current.innerHTML = "";
      qr.append(qrRef.current);
    }
  }, [reference]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const signatureInfo = await findReference(CONNECTION, reference, {
          finality: "confirmed",
        });

        const validated = await validateTransfer(CONNECTION, signatureInfo.signature, {
          recipient,
          amount,
          reference,
        }, { commitment: "finalized" });

        if (validated) {
          const transactionId = signatureInfo.signature;

          // Check if the transaction ID is different from the last one
          if (transactionId !== lastTransactionId) {
            setLastTransactionId(transactionId); // Update the last transaction ID
            setSuccess("You can use your Kekenapep");

            // Transaction successful, send status to Flask API endpoint
            const transactionStatus = { success: true, };

            await fetch('https://flask-wtqv.onrender.com/transaction-stat', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(transactionStatus),
            })
              .then(response => {
                if (response.ok) {
                  setSuccess("Transaction status sent successfully");
                } else {
                  throw new Error('Failed to send transaction status to server');
                }
              })
              .catch(error => {
                console.error(error);
                setSuccess("An error occurred while sending transaction status");
              });
          }
        }
      } catch (e) {
        console.log(e);
        if (e instanceof FindReferenceError) {
          return;
        }
        setSuccess("An error occurred");
      }
    }, 5000); // Check for new transactions every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [reference, lastTransactionId]); // Add lastTransactionId to the dependency array

  return (
    <div className="flex items-center justify-center h-screen">
      <p>{success}</p>
      {success.length > 0 ? (
        <div>
          <p>{success}</p>
        </div>
      ) : (
        <div ref={qrRef} />
      )}
    </div>
  );
}
