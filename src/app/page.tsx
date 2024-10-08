import { FAQ } from "@/components/faq";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Profiles } from "@/components/profiles";
import { Section2 } from "@/components/sectio2";
import { SpecialsConditions } from "@/components/specials-conditionss";


export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-14">
      <Header/>
      <Hero/>
      <Section2/>
      <Profiles/>
      <SpecialsConditions/>
      <FAQ/>
    </div>
  );
}
