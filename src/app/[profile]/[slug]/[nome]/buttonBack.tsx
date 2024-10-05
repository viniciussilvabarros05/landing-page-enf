"use client"

import Button3D from "@/components/button3d"
import { CircleArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export const ButtonBack = ()=>{
    const navigation = useRouter()
    return(
        <Button3D className="fixed left-12 top-8 rounded-full px-2">
        <div onClick={()=> navigation.back()}>
          <CircleArrowLeft className="size-12 text-white" />
        </div>
      </Button3D>
    )
}