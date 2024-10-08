import { cn } from "@/lib/utils";
import { DetailedHTMLProps, ReactNode, RefAttributes } from "react";

type Props = {
  children: ReactNode;
  ref?: any;
  className?: string;
};
export const Container = ({ children, ref, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center w-[100%] 2xl:w-[70%] min-h-screen lg:px-20 px-5",
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};
