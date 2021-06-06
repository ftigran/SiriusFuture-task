import styled from '@emotion/styled'
import Wrapper from './wrapper'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface IRangeWrapperProps{
  title: string;
  sliderProps: {
    
  }
}
const MaxWidth = styled.div`
  max-width: 544px;
  width: 100%;
  p{
    font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 57px;
text-align: center;

color: #371548;
margin: 0;
  }
  .rc-slider{
    padding-top: 83px;
    padding-bottom: 36px;
    .rc-slider-track{
      height: 23px;
      background: #FDD207;
      border-radius: 11px;
    }
    .rc-slider-handle {
      border: 12px solid #FDD207;
      width: 44px;
      height: 44px;
      margin-top: -10px;
      background:#0E0C0B;
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
  
    color: #000000;
    }
    .rc-slider-mark {
      top: 13px;
      width: 94%;
      margin-right: 3%;
      margin-left: 3%
    }
  }
`    


    export default ({title, sliderProps}:IRangeWrapperProps)=>{
      function getMarks<A>(min:number, max:number, step:number):{[A:number]:[A:number]}{
        const a = {}
        for (let key =min; key<=max; key=key+step){
          a[key]=key
        }
        return a
      }
      return(
        <Wrapper>
          <MaxWidth>
            <p>{title}</p>
            
            <Slider 
              marks={getMarks(1,10,1)}
              {...sliderProps}
                />
          </MaxWidth>
    
        </Wrapper>
      )
    }