import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {
  href: string;
  label: string;
  className?: string;
};
export const LinkHeader = ({ label, href, className }: Props) => {
  return (
    <Link
      href={href || ""}
      className={cn(
        "text-blue-400 font-[600] justify-center relative before:absolute before:bottom-[-10px] before:left-0 before:w-1 before:h-1 before:opacity-0  before:bg-blue-500 flex before:duration-300 before:transition-all hover:before:w-full hover:before:opacity-[1]",
        className
      )}
    >
      {label}
    </Link>
  );
};
