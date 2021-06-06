import styled from "@emotion/styled";
// import Slider from '@material-ui/core/Slider';
import MainLayout from "../components/mainlayout";
// import { Range } from 'react-range';
import { useState } from "react";
import Wrapper from "../components/wrapper";
import RangeWrrapped from "../components/rangeWrapped";
import IRangeProps from "../interfaces/IRangeProps";
import Timer from "../components/timer";
import { useFormik } from "formik";

const Container = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  max-width: 1460px;
`;
const Button = styled.button`
background: #FDD207;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 49px;
line-height: 57px;
min-width 390px;
height: 110px;
border-radius: 55px;
color: #371548;
border: none;
min-width: 390px;
`;
const ranges: IRangeProps[] = [
  {
    title: "Сколько слов",
    sliderProps: {
      name: "quantityWords",
      defaultValue: 7,
      min: 1,
      step: 1,
      max: 10,
    },
  },
  {
    title: "Стартовое расстояние",
    sliderProps: {
      name: "lenghtOfWord",
      defaultValue: 25,
      min: 5,
      step: 5,
      max: 40,
    },
  },
  {
    title: "Сколько букв в словах",
    sliderProps: {
      name: "startDistance",
      defaultValue: 9,
      min: 3,
      step: 1,
      max: 16,
    },
  },
  {
    title: "Увеличение расстояния",
    sliderProps: {
      name: "changeDistance",
      defaultValue: 25,
      min: 5,
      step: 5,
      max: 40,
    },
  },
];
const speed = "speed";

export default function Home() {
  const value = 5;
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: Object.assign(
      {
        [speed]: "1,0",
      },
      ...ranges.map((range) => ({
        [range.sliderProps.name]: range.sliderProps.defaultValue,
      }))
    ),
    onSubmit: (valuse) => {
      console.log(values);
    },
  });
  return (
    <MainLayout title={"Settings"} pageTitle="Тренажер «Поле зрения»">
      <Container
        onSubmit={handleSubmit}
        //  {(prop)=>{
        //           prop.preventDefault()
        // console.log(prop)
        //         }}
      >
        <Timer name={speed} handler={handleChange} value={values[speed]} />

        {ranges.map((range, index) => (
          <RangeWrrapped {...range} key={index} handler={handleChange} />
        ))}
        <Wrapper transparent>
          <Button type="submit">Старт</Button>{" "}
        </Wrapper>
      </Container>
    </MainLayout>
  );
}
