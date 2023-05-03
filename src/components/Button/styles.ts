import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;
  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    background-color: #bbb;
    width: 100%;
    height: 42px;
    color: #fff;
    border: 1px solid #bbb;
    border-radius: 21px;
    cursor: not-allowed;
    opacity: 1;
  }

`;
