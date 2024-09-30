import { FAQ } from "@/components/faq";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Profiles } from "@/components/profiles";
import { Section2 } from "@/components/sectio2";
import { SpecialsConditions } from "@/components/specials-conditionss";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header/>
      <Hero/>
      <Section2/>
      <Profiles/>
      <SpecialsConditions/>
      <FAQ/>
    </div>
  );
}
