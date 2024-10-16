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
        "flex flex-col justify-center mx-auto w-[100%] 2xl:w-[70%] lg:px-20 px-5 mt-32",
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};
