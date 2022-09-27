import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  border-radius: 0px;

  p {
    font-size: 0.8rem;
    color: #707070;
    text-transform: uppercase;
    transform: translateY(20px);
  }

  h2 {
    font-size: 0.8rem;
    color: #707070;
    font-weight: 300;
    margin-left: 3px;
  }

  .titleContainer {
    height: 8%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    border-radius: 0px;
    font-size: 0.7rem;
    color: #1c6bba;
  }

  button:hover {
    background-color: #fff;
    color: #164d95;
  }

  svg {
    margin-left: 2px;
    height: 10px;
    width: 10px;
  }

  svg:hover {
    fill: #164d95;
  }

  img {
    max-height: 250px;
    object-fit: fill;
    border-radius: 0px;
    transform: scale(1);
  }

  a {
    font-size: 0.7rem;
  }

  div {
    font-family: Volvo Novum, Arial, sans-serif;
    padding: 1px;
  }
`;
