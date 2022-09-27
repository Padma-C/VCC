import React from 'react';
import { StyledCarouselItem } from './CarouselItemStyles';

type CarouselItemProps = {
  cardClassify: string;
  id: number;
  cardGap: number;
  visibleCards: number;
  children: any;
};

const CarouselItem: React.FC<CarouselItemProps> = ({
  cardGap,
  visibleCards,
  cardClassify,
  children,
}) => (
  <StyledCarouselItem
    cardGap={cardGap}
    visibleCards={visibleCards}
    className={cardClassify}
  >
    {children}
  </StyledCarouselItem>
);

export default CarouselItem;
