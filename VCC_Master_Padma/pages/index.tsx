import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Spinner } from 'vcc-ui';
import Carousel from '../components/Carousel/Index';
import Item from '../components/CarItem/Item';
import styles from '../styles/Home.module.css';
import { View } from 'vcc-ui';
import { Block } from 'vcc-ui';
import { Logo } from 'vcc-ui';

const getDetails = async (): Promise<CarType[]> => {
  return await (await fetch('./api/cars.json')).json();
};

const CarouselProps = {
  cardGap: 10,
  cardsDisplayed: 4,
  pageTransition: 2000,
};

export type CarType = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const index = () => {
  const [filterCars, setFilterCars] = useState([]);
  const [fleet, setFleet] = useState([]);

  useEffect(() => {
    fetch('./api/cars.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((fleet) => {
        setFleet(fleet);
        setFilterCars(fleet);
      })
      .catch((event) => {
        return console.log('error', event);
      });
  }, []);

  const { isLoading, error } = useQuery<CarType[]>('vehicles', getDetails);

  if (isLoading) return <Spinner size={32} />;
  if (error) return <div>Aw, Snap! 👾 Something went wrong.</div>;

  const filteredCars = () => {
    return (
      <>
        <Block
          as="h1"
          extend={{
            padding: 30,
            margin: 0,
            color: 'white',
            textShadow: '1px 1px 1px green',
            fontFamily: 'Volvo Novum, Helvetica Neue, Arial',
            background: '#fafafa',
          }}
        >
          <Logo type="spreadmark" height={8} />
        </Block>
        <View>
          <h1 className={styles.title}>Our models</h1>
        </View>

        <select
          onInput={(event: any) => {
            const vehicles = [...fleet];
            const filteredCars: any = vehicles
              .map((x: CarType) => {
                return event?.target?.value === x?.bodyType ? x : null;
              })
              .filter((x: any) => {
                return !(x === null);
              });
            if (!filteredCars?.length) {
              setFilterCars(vehicles);
              return;
            }
            setFilterCars(filteredCars);
          }}
        >
          <option>CAR TYPE</option>
          {[
            ...new Set(
              fleet?.map((car: CarType) => {
                return car?.bodyType;
              })
            ),
          ]?.map((unit: string) => {
            return (
              <option value={unit} key={unit}>
                {unit?.toUpperCase()}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  return (
    <>
      {filteredCars()}
      <Carousel {...CarouselProps}>
        {filterCars?.map((x: CarType) => {
          return (
            <div key={x?.id}>
              <Item item={x} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default index;
