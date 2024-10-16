"use client"

import Button3D from "@/components/button3d"
import { cn } from "@/lib/utils"
import { CircleArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

type Props = {
  className:string;
  style?: any
}

export const ButtonBack = ({className, style}:Props)=>{
    const navigation = useRouter()
    return(
        <Button3D className={cn("fixed left-4 top-4 lg:left-12 lg:top-4 rounded-full px-2 z-10", className)} style={style}>
        <div onClick={()=> navigation.back()}>
          <CircleArrowLeft className="size-10 text-white" />
        </div>
      </Button3D>
    )
}