import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center border-b gap-3 border-solid py-5">
        <Avatar>
          <AvatarImage
            alt="Perfil"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s"
          ></AvatarImage>
        </Avatar>

        <div>
          <p className="font-bold">Marcos David</p>
          <p className="text-sm">mdgomes.outlook.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <SheetClose asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </SheetClose>
        </Button>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((Option) => (
          <Button
            key={Option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt="Option.title"
              src={Option.imageUrl}
              height={18}
              width={18}
            />
            {Option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2  py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
