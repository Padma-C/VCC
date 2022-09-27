import React, { useState, useEffect, useRef } from 'react';
import CarouselItem from './CarouselItem';
import { StyledCarouselContainer, StyledCarousel } from './CarouselStyles';

type CarouselProps = {
  children?: React.ReactNode;
  cardGap: number;
  cardsDisplayed: number;
  pageTransition: number;
};

const numberofCards = (cardsDisplayed: number, screenSize: number) => {
  if (screenSize <= 1200) {
    if (screenSize > 992) return 4;
    if (screenSize > 768) return 3;
    return 2;
  } else {
    return 5;
  }
};

let Carousel: React.FC<CarouselProps>;

Carousel = ({ children, cardGap, cardsDisplayed, pageTransition }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollSize, setScrollSize] = useState(0);

  const CarouselRef = useRef<HTMLElement>(null);

  const totalPages: number =
    Math.ceil(
      React.Children.count(children) / numberofCards(cardsDisplayed, scrollSize)
    ) - 1;

  useEffect(() => {
    //@ts-ignore
    const resizeObserver = new ResizeObserver((entries) => {
      setScrollSize(entries[0].contentRect.width);
    });
    //@ts-ignore
    resizeObserver.observe(CarouselRef.current);
  }, [CarouselRef]);

  useEffect(() => {
    if (CarouselRef) {
      if (CarouselRef.current) {
        if (!(currentPage <= totalPages)) setCurrentPage(totalPages);
        CarouselRef.current.style.transform = `translate3D(-${
          currentPage * scrollSize
        }px, 0, 0)`;
      }
    }
  }, [CarouselRef, currentPage, scrollSize, totalPages]);

  const handleCardMotion = (forward: boolean) => {
    setCurrentPage(currentPage + (forward ? 1 : -1));
    if (!CarouselRef.current) {
      return;
    }
    CarouselRef.current.style.transform = `translate3D(-${
      (currentPage + (forward ? 1 : -1)) * scrollSize
    }px, 0, 0)`;
  };

  const assignCardClassify = (Index: number, visibleCards: number) => {
    const classes = ['right', 'left'];
    return classes[Index % visibleCards] || '';
  };

  return (
    <StyledCarouselContainer
      visibleCards={numberofCards(cardsDisplayed, scrollSize)}
    >
      <StyledCarousel
        visibleCards={numberofCards(cardsDisplayed, scrollSize)}
        cardGap={cardGap}
        pageTransition={pageTransition}
        ref={CarouselRef}
      >
        {React.Children.map(children, (child: any, x: any) => {
          return (
            <CarouselItem
              key={x}
              cardGap={cardGap}
              visibleCards={numberofCards(cardsDisplayed, scrollSize)}
              cardClassify={assignCardClassify(
                x + 1,
                numberofCards(cardsDisplayed, scrollSize)
              )}
              id={x + 1}
            >
              {child}
            </CarouselItem>
          );
        })}
      </StyledCarousel>
      {!(currentPage <= 0) && (
        <div className="roundButtonContainer previous">
          <button
            className="button previous"
            onClick={() => handleCardMotion(false)}
          >
            &#8249;
          </button>
        </div>
      )}
      {!(currentPage === totalPages) && (
        <div className="roundButtonContainer next">
          <button
            className="button next"
            onClick={() => handleCardMotion(true)}
          >
            &#8250;
          </button>
        </div>
      )}
    </StyledCarouselContainer>
  );
};

export default Carousel;
