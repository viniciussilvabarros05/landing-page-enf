"use client"

import Button3D from "@/components/button3d"
import { CircleArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export const ButtonBack = ()=>{
    const navigation = useRouter()
    return(
        <Button3D className="fixed left-4 top-4 lg:left-12 lg:top-8 rounded-full px-2 z-10">
        <div onClick={()=> navigation.back()}>
          <CircleArrowLeft className="size-10 text-white" />
        </div>
      </Button3D>
    )
}