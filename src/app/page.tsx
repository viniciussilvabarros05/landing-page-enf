import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Section2 } from "@/components/sectio2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header/>
      <Hero/>
      <Section2/>
    </div>
  );
}
