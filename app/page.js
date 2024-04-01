"use client"
import { useRouter } from "next/navigation"
import Login from "./components/Login"

const Main = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push("/payment")}>Qr session</button>
      <Login/>
    </div>
  )
}

export default Main