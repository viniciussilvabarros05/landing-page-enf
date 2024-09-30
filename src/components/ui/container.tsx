import { DetailedHTMLProps, ReactNode, RefAttributes } from "react";

type Props = {
  children: ReactNode;
  ref?: any;
};
export const Container = ({ children, ref }: Props) => {
  return (
    <div className="flex flex-col w-[100%] 2xl:w-[70%] h-screen px-20" ref={ref}>
      {children}
    </div>
  );
};
