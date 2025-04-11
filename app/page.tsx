"use client";
import Image from "next/image";
import LatexRenderer from "./aaaaa";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [bb, setBb] = useState<string>("x^2 + y^2 = z^2");
  return (
    <div className="h-screen place-content-center place-items-center p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row w-full h-full gap-x-3">
        
        <div className="w-full">
          <textarea
          className="w-full h-full p-2 border-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setBb(e.target.value);
          }
          }
          placeholder="Type something..."
          value={bb}
        />
        </div>
        
        <div className="w-full border-4 border-gray-300 rounded-md">
          <LatexRenderer latex={bb} />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
