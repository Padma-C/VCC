import styled from 'styled-components';

type CarouselContainerProps = {
  visibleCards: number;
};

type CarouselProps = {
  visibleCards: number;
  cardGap: number;
  pageTransition: number;
  ref: any;
};

export const StyledCarouselContainer = styled.div<CarouselContainerProps>`
  overflow: hidden;
  align-self: center;
  width: 99.5vw;
  height: 68vh;
  position: relative;
  background: #fff;

  .buttonContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    bottom: 5%;
    box-sizing: border-box;
  }

  .roundButtonContainer {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 55px;
    width: 55px;
    bottom: 10%;
    right: 2%;
    box-sizing: border-box;
  }

  .button {
    display: grid;
    background: #fff;
    bottom: 0;
    color: #000;
    font-size: 2rem;
    font-weight: 100;
    line-height: 2rem;
    cursor: pointer;
    outline: none;
    transition: all 0.5s;
    user-select: none;
    :hover {
      opacity: 0.4;
    }
  }

  .previous {
    right: 5rem;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  .next {
    right: 0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;

export const StyledCarousel = styled.div<CarouselProps>`
  display: flex;
  padding: 0 55px;
  transition: transform ${(props) => props.pageTransition}ms ease;
  }
`;
