import Button3D from "@/components/button3d";
import WordPullUp from "@/components/ui/word-pull-up";
import Image from "next/image";
import { ButtonBack } from "../[profile]/[slug]/[nome]/buttonBack";

export default function Page() {
  return (
    <footer
      id="contatos"
      className="h-screen w-full bg-blue-400 p-8 flex items-center flex-col justify-center gap-2"
    >
      <ButtonBack />
      <Image
        src="/images/logo.png"
        className="w-44 h-32"
        style={{ objectFit: "contain" }}
        width={200}
        height={0}
        alt="SIOVH"
      />
      <WordPullUp
        className="text-white text-lg font-bold"
        words=" Entre em contato conosco nos enviando um e-mail. Será um prazer ajudá-lo!"
      />

      <textarea
        placeholder="Envie-nos uma mensagem"
        className=" mb-4 p-4 min-w-[250px] max-w-[800px] w-[40%] h-1/2 rounded outline-none"
        maxLength={1000}
      />
      <Button3D>ENVIAR</Button3D>
    </footer>
  );
}
