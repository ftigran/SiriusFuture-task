import { useState } from "react";
import styled from "@emotion/styled";
import Wrapper from "./wrapper";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

const Button = styled.button`
  width: 92px;
  height: 92px;
  background: #fdd207;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.3s;
  :hover {
    background: #ffeb00;
  }
  :active {
    background: #93fd07;
  }
  ::after,
  :before {
    content: "";
    background: #000000;
    position: absolute;
  }
  :last-of-type::before {
    width: 10px;
    height: 50px;
  }
  ::after {
    width: 50px;
    height: 10px;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const P = styled.p`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  input {
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 20px;
    min-width: 126px;
    height: 60px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    margin: 0 15px 0 46px;

    width: 126px;
    text-align: center;
    padding: 0 10px;
    :focus {
      outline: none;
      border-color: #371548;
    }
  }
`;
interface IProps {
  name: string;
  handler: (val: number) => void;
}
export default function timer({ name, value, handler }) {
  // const [value, setValue]=useState(1)
  const changeVal = () => {
    console.log(value);
  };
  // const Val=()=>{
  // console.log(val)
  //
  // }
  return (
    <Wrapper>
      <P>
        Скорость
        <MaskedInput
          id={name}
          type="text"
          value={value}
          // onChange={(e,a)=>{console.log(a)}}
          mask={[/[1-5]/, ",", /0|5/]}
          guide={false}
          onBlur={handler}

          // onBlur={() => {console.log("blur")}}
        />
        сек.
      </P>
      <ButtonsWrapper>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            console.log(e);
            // setValue((evael)=>{console.log(evael-0.5)})
          }}
        >
          -
        </Button>
        <Button type="button">+</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}
