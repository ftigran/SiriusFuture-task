import styled from '@emotion/styled'
// import Slider from '@material-ui/core/Slider';
import MainLayout from '../components/mainlayout'
// import { Range } from 'react-range';
import {useState} from 'react'
import Wrapper from '../components/wrapper'
import RangeWrrapped from '../components/rangeWrapped'

  const Container = styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    max-width: 1460px;
  `

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
