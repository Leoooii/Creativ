'use client';

import { Card, CardBody, CardFooter, Image, Slider } from '@nextui-org/react';
import { useState } from 'react';
import { Metalurgice } from '../../public/data/DummyData';
import { Pagination } from '@nextui-org/react';
import Link from 'next/link';

interface ImageCardComponentProps {
  filtru: string; // Aici specificăm că filtru este un string
}

export const ImageCardComponent: React.FC<ImageCardComponentProps> = ({ filtru }) => {
  const [minim] = useState(0);
  const [maxim] = useState(700);
  const [selectedValue, setSelectedValue] = useState(700);
  const [setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  let subcategorieGasita:
    | {
        label: string;
        materiale: {
          title: string;
          description: string;
          price: number;
          img: string;
          code: number;
        }[];
      }
    | undefined = undefined;

  if (filtru) {
    subcategorieGasita = Metalurgice.find((subcategorie) => subcategorie.label === filtru);
  }

  // Funcție pentru a filtra materialele pe baza prețului
  const filteredMateriale = subcategorieGasita
    ? subcategorieGasita.materiale.filter((item) => item.price >= minim && item.price <= selectedValue)
    : [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Slider
        label="Filtru"
        radius="md"
        step={5}
        maxValue={maxim}
        minValue={minim}
        defaultValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
        }}
        formatOptions={{ style: 'currency', currency: 'LEI' }}
        className="max-w-md text-black"
        showOutline={true}
        hideThumb={false}
        renderThumb={(props) => (
          <div
            {...props}
            className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-blue-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
          </div>
        )}
      />
      {filteredMateriale.length > 0 ? (
        <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 mt-10 mb-5">
          {filteredMateriale.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log('item pressed')}>
              <Link href={`/${filtru}/${item.code}`}>
                <CardBody className="overflow-visible p-10">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[160px]"
                    src={item.img}
                  />
                </CardBody>
              </Link>
              <CardFooter className="flex flex-col text-small justify-around text-black ">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price} lei</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p>Nu există materiale pentru această subcategorie.</p>
      )}

      <div className="bg-black flex justify-center p-2">
        {filteredMateriale.length > 0 ? (
          <Pagination
            total={Math.ceil(filteredMateriale.length / itemsPerPage)} // Folosim length pe materiale filtrate
            initialPage={1}
            onChange={handlePageChange}
            size="lg"
            color="primary"
          />
        ) : (
          <p>Nu există materiale pentru această pagină.</p>
        )}
      </div>
    </div>
  );
};
