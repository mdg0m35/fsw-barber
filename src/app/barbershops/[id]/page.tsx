
import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/service-tem";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapIcon, MenuIcon,StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const barbershopPage = async ({ params }: BarbershopPageProps) => {
  //chamar o seu banco de dados

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
        services:true,
    }
  });


  if (!barbershop) {
    return notFound();
  }


  return (

   
    <div>
      {/*imagem*/}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>
      {/* Titulo*/}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0(499 avaliaçoes)</p>
        </div>
      </div>
      {/* Descricao*/}

      <div className=" space-y-2 border-b border-solid p-5">
        <h2 className="text-sm font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className=" text-justify  text=sm">{barbershop?.description}</p>
      </div>
        {/*Serviços*/}
      <div className="space-y-3 border-b border-solid p-5">
      <h2 className="text-sm font-bold uppercase text-gray-400 mb-3">Serviços</h2>
    <div className="space-y-3">
    {barbershop.services.map(service => <ServiceItem key={service.id} service={service}/>)}
    </div>

      </div>
      {/*Contato*/}
    <div className="space-y-3 p-5">
        {barbershop.phones.map(phone =>(
         <PhoneItem key={phone} phone={phone}/>  
        ))}

    </div>

    </div>
  );
};
export default barbershopPage;
