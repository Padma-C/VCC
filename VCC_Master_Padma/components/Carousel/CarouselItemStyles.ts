import styled from 'styled-components';

type Props = {
  cardGap: number;
  visibleCards: number;
  className: string;
};

export const StyledCarouselItem = styled.div<Props>`
  margin: 0 ${(props) => props.cardGap}px;
  margin-bottom: 1rem;
  position: relative;
  transition: transform 1000ms ease;
  border-radius: 1px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  user-select: none;
  flex: 0 0
    calc(
      100% / ${(props) => props.visibleCards} -
        ${(props) => props.cardGap * 2}px
    );

  img {
    height: 100%;
    width: 100%;
    border-radius: 1.5vw;
    box-sizing: border-box;
  }
`;
