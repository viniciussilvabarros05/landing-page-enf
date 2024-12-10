import Image from "next/image";
import Button3D from "./button3d";

export function Footer() {
  return (
    <footer id="contatos" className="w-full bg-blue-400 mt-14 p-8 flex items-center flex-col justify-center gap-2">
        <Image src="/images/logo.png" className="w-44 h-32" style={{objectFit:"contain"}} width={200} height={0} alt="SIOVH" />
      <h4 className="text-white text-lg font-bold">Se quiser entrar em contato conosco, nos envie um email!</h4>

      <textarea placeholder="Envie-nos uma mensagem" className=" mb-4 p-4 min-w-[250px] max-w-[500px] w-[40%] h-32 rounded" maxLength={1000} />
      <Button3D>ENVIAR</Button3D>
    </footer>
  );
}
