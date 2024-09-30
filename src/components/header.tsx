import Link from "next/link";
import Button3D from "./button3d";
import { LinkHeader } from "./LinkHeader";

export const Header = () => {
  return (
    <header className="w-full m-auto flex items-center justify-center py-8 gap-8 fixed top-0 bg-white/40 backdrop-blur-md shadow-md z-10">
      <LinkHeader href={""} label={"Início"} />
      <LinkHeader href={""} label={" Vacina para todos"}/>
      <LinkHeader href={""} label={"Unidades de Saúde"} />
      <LinkHeader href={""} label={"Campanhas de Vacinação"} />
      <LinkHeader href={""} label={"Mais informações"} />
      <Button3D className="bg-[#f5bf36]">
        <Link href={""} className="font-bold">
            Contato
        </Link>
      </Button3D>
    </header>
  );
};
