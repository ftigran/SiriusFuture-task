import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'

interface IProps{
  title: string;
  pageTitle:string;
  children: any
}

export default function ({title, pageTitle ,children}:IProps){
  const StyledH1= styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;

  color: #2B3172;
  flex-grow: 1;
  text-align: center;
`
const Main = styled.main`
padding: 5rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const LogoWrap = styled.div`
`
const Header = styled.header`
display: flex;
align-items: center;
justify-content: flex-end;
padding-left: 393px;
padding-right: 55px;
box-sizing: border-box;
width: 100%;
`
    return(
        <>
              <Head>
        <title>{title} | Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" />
      </Head>
      <Main>
        <Header>
        {pageTitle && (

<StyledH1 >
  {pageTitle}
</StyledH1>
)}
        <LogoWrap>

          <Image src='/images/logo.png'
          width="338" height="135"
          />
        </LogoWrap>
        </Header>



        {children}

      </Main>
        </>
    )
}