"use client"
import Button3D from "@/components/button3d";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Container } from "@/components/ui/container";
import { profiles } from "@/utils/profiles";
import { vaccines } from "@/utils/vaccines";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import{useEffect} from 'react'
type Props = {
  params: { slug: string; profile: string };
};
export default function Page({ params }: Props) {
  const { slug, profile } = params;
  const profileSearch = decodeURIComponent(profile);
  const slugSearch = Number(decodeURIComponent(slug))
  const profileData = profiles.find(
    (profile) => profile.label == profileSearch
  );
  const categoryData = profileData?.categories.find(
    (category) => category.id == slugSearch
  );
  const vaccinesData = vaccines.filter(vaccine=> vaccine.categories.includes(slugSearch) )
 
  return (
    <Container className="py-8 px-16 gap-8 items-center">
      <Button3D className="absolute left-12 top-8 rounded-full px-2">
        <Link href="/#profiles">
          <CircleArrowLeft className="size-12 text-white" />
        </Link>
      </Button3D>
      <BlurFade inView>
        <div className="size-44 mx-auto rounded-full border-blue-500 border p-4 overflow-hidden">
          <img
            src={categoryData?.img}
            className="w-full h-full object-contain"
          />
        </div>
      </BlurFade>
      <BoxReveal boxColor="#3b82f6" duration={0.2}>
        <h1 className="text-black text-4xl font-bold">
          {profileData?.label} : {categoryData?.label}
        </h1>
      </BoxReveal>
    </Container>
  );
}
