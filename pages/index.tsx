import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'
import Slider from '@material-ui/core/Slider';
import React from 'react';

export default function Home() {
  const StyledH1= styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;

    color: #2B3172;
  `
  const Container = styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  `
 interface IProps {
  transparent?: true
 }
  const Wrapper = styled.div((props:IProps)=>(
    {
      display: 'flex',
      minHeight: 220,
      justifyContent: 'center',
      alignItems: 'center',
  
      boxShadow: !props.transparent && '0px 4px 4px rgba(0, 0, 0, 0.25)',
      background: !props.transparent && '#FFFFFF',
      borderRadius: !props.transparent && 48,
    }
  ))
const value = 5

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" />
      </Head>

      <main className={styles.main}>
        <StyledH1 >
          Тренажер «Поле зрения»
        </StyledH1>
        <Container onSubmit={(prop)=>{
          prop.preventDefault()
console.log(prop)
        }}>
          <Wrapper><input type="text"/></Wrapper>
          <Wrapper><Slider
                    value={value}
        min={1}
        step={1}
        max={10}
        // scale={(x) => x ** 10}
          /></Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper transparent>aa <button type="submit">sub</button> </Wrapper>
        </Container>
      </main>
    </div>
  )
}
