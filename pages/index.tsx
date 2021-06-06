import styled from '@emotion/styled'
// import Slider from '@material-ui/core/Slider';
import MainLayout from '../components/mainlayout'
// import { Range } from 'react-range';
import {useState} from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Wrapper from '../components/wrapper'
export default function Home() {

  const Container = styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    max-width: 1460px;
  `

const value = 5
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
const RangeWrrapped=({title, sliderProps}:IRangeWrapperProps)=>{
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
// const RRange = ()=>{
//   const [state, setState] = useState({ values: [50] })
//   return(
//   <Range
//   step={0.1}
//   min={0}
//   max={100}
//   values={state.values}
//   onChange={(values) => setState({ values })}
//   renderTrack={({ props, children }) => (
//     <div
//       {...props}
//       style={{
//         ...props.style,
//         height: '6px',
//         width: '100%',
//         backgroundColor: '#ccc'
//       }}
//     >
//       {children}
//     </div>
//   )}
//   renderThumb={({ props }) => (
//     <div
//       {...props}
//       style={{
//         ...props.style,
//         height: '42px',
//         width: '42px',
//         backgroundColor: '#999'
//       }}
//     />
//   )}
// />)
// }


  return (
    <MainLayout title={'Settings'}
    pageTitle="Тренажер «Поле зрения»"
    >
        <Container
//          onSubmit={(prop)=>{
//           prop.preventDefault()
// console.log(prop)
//         }}
        >
          <Wrapper><input type="text"/></Wrapper>
          <Wrapper>

    {/* <Range /> */}
              </Wrapper>
          <RangeWrrapped title="Сколько слов" sliderProps={{
                        defaultValue:value,
                        min:1,
                        step:1,
                        max:10,
          }}/>
          <Wrapper>qq</Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper transparent>aa <button type="submit">sub</button> </Wrapper>
        </Container>
      </MainLayout>
  )
}
