import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/*header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Marcos</h2>
        <p>Terça-Feira,14 de Agosto</p>
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner01.png"
            fill
            className="object-cover"
            alt={"Agende dos melhores com FSW"}
          />
        </div>
      </div>
    </div>
  );
}
