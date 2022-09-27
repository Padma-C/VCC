import React from 'react';
import { CarType } from '../../pages/index';
import { Container } from './Item.styles';
import { Link } from 'vcc-ui';

type Props = {
  item: CarType;
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <div>
        <p>{item.bodyType}</p>
        <div className="titleContainer">
          <h3>{item.modelName}</h3>
          <h2>{item.modelType}</h2>
        </div>
      </div>
      <img src={item.imageUrl} alt={item.modelName} />
      <div className="buttonContainer">
        <>
          <Link href={`/learn/${item.id}`}>
            Learn
            <span>
              <svg>
                <path
                  d="M2 1.5l4 4-4 4"
                  fill="none"
                  stroke="#1c6bba"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </Link>
        </>
        <>
          <Link href={`/shop/${item.id}`}>
            Shop{' '}
            <span>
              <svg>
                <path
                  d="M2 1.5l4 4-4 4"
                  fill="none"
                  stroke="#1c6bba"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </Link>
        </>
      </div>
    </Container>
  );
};

export default Item;
