"use client"
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  return (
    <main>
      {
        !isLoaded && <Loader setIsLoaded={setIsLoaded}/>
      }
    </main>
  );
}
