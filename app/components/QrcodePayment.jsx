"use client"
// import { useEffect, useMemo, useRef, useState } from "react";
// import {
//   createQR,
//   encodeURL,
//   findReference,
//   FindReferenceError,
//   validateTransfer,
// } from "@solana/pay";
// // import { setCookie } from 'cookies-next';
// import { Connection, Keypair, PublicKey } from "@solana/web3.js";
// // import useToastHook from "@/hooks/useToastHook";
// import BigNumber from 'bignumber.js';
// // import { CONNECTION } from "@/utils/data";
// // import { createQR } from "@/utils/createQr";
// ;

// const CONNECTION = new Connection(`https://devnet.helius-rpc.com/?api-key=f35a6b68-2ef4-4620-a8be-5a893d35eb9a
// `, 'confirmed');

// export default function QrCodePayment() {
//   const [success, setSuccess] = useState("")
//     const qrRef = useRef(null)
  
//   const recipient = new PublicKey("37vHKCCzgDhSKoJHE2VYbxDAckJS4Jr6HXcq8oJ7cJJy");
//   const amount = new BigNumber(Number(1));
//   const reference = useMemo(() => Keypair.generate().publicKey, []);
//   const label = 'TRYKEY';
//   const message = `Payment for KEKENAPEP USAGE.`;
//   const memo = 'KEKE VERIFICATION';

//   useEffect(() => {
//     const solanaUrl = encodeURL({ recipient, amount, reference, label, message, memo });
//     const qr = createQR(
//       solanaUrl, 
//       300, 
//       "transparent"
//     );

//     if (qrRef.current) {
//       qrRef.current.innerHTML = "";
//       qr.append(qrRef.current);
//     }
//   }, [reference]);

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       try {
//         const signatureInfo = await findReference(CONNECTION, reference, {
//           finality: "confirmed",
//         });

//         const validated = await validateTransfer(CONNECTION, signatureInfo.signature, {
//           recipient,
//           amount,
//           reference
//         }, { commitment: "finalized" })

//         if (validated) {
//           setSuccess("You can use you Kekenapep")
//         }

//       } catch (e) {
//         if (e instanceof FindReferenceError) {
//           return;
//         }
//       }
//     }, 5000); // Check for new transactions every 5 seconds
//     return () => {
//       clearInterval(interval);
//     };
//   }, [reference]);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       {success.length > 0?
//         <div>
//           <p>{success}</p>
//         </div>
//         :
//         <div ref={qrRef} />
//       }
//     </div>
//   )
// }
import { useEffect, useRef, useState, useMemo } from "react";
import BigNumber from 'bignumber.js';
import {
  createQR,
  encodeURL,
  findReference,
  FindReferenceError,
  validateTransfer,
} from "@solana/pay";
import { axios} from "axios"
// import { setCookie } from 'cookies-next';
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
// import useToastHook from "@/hooks/useToastHook";
// import { CONNECTION } from "@/utils/data";
// import { createQR } from "@/utils/createQr";
;

const CONNECTION = new Connection(`https://devnet.helius-rpc.com/?api-key=f35a6b68-2ef4-4620-a8be-5a893d35eb9a`,"finalized");

export default function QrCodePayment() {
  const [success, setSuccess] = useState("");
  const qrRef = useRef(null);

  const recipient = new PublicKey("37vHKCCzgDhSKoJHE2VYbxDAckJS4Jr6HXcq8oJ7cJJy");
  const amount = new BigNumber(Number(0.1));
  const reference = useMemo(() => Keypair.generate().publicKey, []);
  const label = 'TRYKEY';
  const message = `Payment for Kekenapep Usage.`;
  const memo = 'KEKE VERIFICATION';

  useEffect(() => {
    const solanaUrl = encodeURL({ recipient, amount, reference, label, message, memo });
    const qr = createQR(
      solanaUrl, 
      300, 
      "transparent"
    );

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
          reference
        }, { commitment: "finalized" })

        if (validated) {
          setSuccess("You can use your Kekenapep0");
          // Transaction successful, send status to Flask API endpoint
          const transactionStatus = { success: true, transactionId: signatureInfo.signature };
          setSuccess("You can use your Kekenapep1");
          await fetch('https://flask-wtqv.onrender.com/transaction-stat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionStatus)
          })
          .then(response => {
            if (response.ok) {
              setSuccess("You can use you Kekenapep");
            } else {
              throw new Error('Failed to send transaction status to server');
            }
            console.log(transactionStatus); // Moved console.log here
          })}

      } catch (e) {
        console.log(e)
        if (e instanceof FindReferenceError) {
          return;
        }
      }
    }, 5000); // Check for new transactions every 5 seconds
    return () => {
      clearInterval(interval);
    };
  }, [reference]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>{success}1</p>
      {success.length > 0 ?
        <div>
          <p>{success}3</p>
        </div>
        :
        <div ref={qrRef} />
      }
    </div>
  )
}

