"use client";

import Navbar from "@/app/component/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div>Loading...</div>
      <Navbar/>
      <Link href={"/users"}> Got to users List</Link>
    </main>
  );
}
