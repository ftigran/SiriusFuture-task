import styled from '@emotion/styled'
import Slider from '@material-ui/core/Slider';
import MainLayout from '../components/mainlayout'

export default function Home() {

  const Container = styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    max-width: 1460px;
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
          <Wrapper><Slider
            value={value}
            min={1}
            step={1}
            max={10}
          /></Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper>qq</Wrapper>
          <Wrapper transparent>aa <button type="submit">sub</button> </Wrapper>
        </Container>
      </MainLayout>
  )
}
