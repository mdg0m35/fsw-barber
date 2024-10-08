import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbeshop-item";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import { quickSearchOptions } from "./_constants/search";
import Link from "next/link";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  /*const polularBabershop = await db.barbershop.findMany({
    orderBy:{
      name: "desc",
    }
  })*/

  return (
    <div>
      {/*header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Marcos</h2>
        <p>Terça-Feira,14 de Agosto</p>
        {/* Busca*/}
        <div className="mt-6">
          <Search />
        </div>
        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* Imagem*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner01.png"
            fill
            className="object-cover"
            alt={"Agende dos melhores com FSW"}
          />
        </div>
        {/* Agendamento*/}
        <BookingItem />
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  );
};
export default Home;
