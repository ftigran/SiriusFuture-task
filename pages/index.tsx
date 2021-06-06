import styled from '@emotion/styled'
// import Slider from '@material-ui/core/Slider';
import MainLayout from '../components/mainlayout'
// import { Range } from 'react-range';
import {useState} from 'react'
import Wrapper from '../components/wrapper'
import RangeWrrapped from '../components/rangeWrapped'
import IRangeWrapperProps from '../interfaces/IRangeWrapperProps'

  const Container = styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    max-width: 1460px;
  `
const ranges:IRangeWrapperProps[] = [
{
title:'Сколько слов',
sliderProps:{
  defaultValue:7,
  min:1,
  step:1,
  max:10,
 }
},
{
  title:'Стартовое расстояние',
  sliderProps:{
    defaultValue:25,
    min:5,
    step:5,
    max:40,
   }
  },
  {
    title:'Сколько букв в словах',
    sliderProps:{
      defaultValue:9,
      min:3,
      step:1,
      max:16,
     }
    },{
      title:'Увеличение расстояния',
      sliderProps:{
        defaultValue:25,
        min:5,
        step:5,
        max:40,
       }
      }

]
export default function Home() {



const value = 5

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
              {ranges.map((range, index)=>(
                <RangeWrrapped {...range} key={index}/>
              ))}
          <Wrapper>qq</Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper transparent>aa <button type="submit">sub</button> </Wrapper>
        </Container>
      </MainLayout>
  )
}
