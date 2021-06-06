import styled from "@emotion/styled";
import Wrapper from "./wrapper";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import IRangeWrapperProps from "../interfaces/IRangeWrapperProps";

const SliderStyled = styled.div`
  .rc-slider {
    padding-top: 83px;
    padding-bottom: 36px;
    .rc-slider-track {
      height: 23px;
      background: #fdd207;
      border-radius: 11px;
    }
    .rc-slider-handle {
      border: 12px solid #fdd207;
      width: 44px;
      height: 44px;
      margin-top: -10px;
      background: #0e0c0b;
    }
    .rc-slider-rail {
      background: transparent;
    }
    .rc-slider-dot {
      display: none;
    }
    .rc-slider-mark-text {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 38px;
      line-height: 45px;
      min-width: 45px;

      color: #000000;
    }
    .rc-slider-mark {
      top: 13px;
      width: 94%;
      margin-right: 3%;
      margin-left: 3%;
    }
  }
`;
function getMarks<A>(
  min: number,
  max: number,
  step: number
): { [A: number]: [A] } {
  const a = {};
  for (
    let key = min;
    key <= max;
    key = (max - min) / step > 10 ? key + step * 2 : key + step
  ) {
    a[key] = key;
  }
  return a;
}

export default ({ title, sliderProps }: IRangeWrapperProps) => {
  return (
    <Wrapper>
      <p>{title}</p>

      <SliderStyled>
        <Slider
          marks={getMarks(sliderProps.min, sliderProps.max, sliderProps.step)}
          {...sliderProps}
        />
      </SliderStyled>
    </Wrapper>
  );
};
