import styled from '@emotion/styled'

interface IProps {
    transparent?: true
   }
   export default styled.div((props:IProps)=>(
      {
        display: 'flex',
        minHeight: 220,
        padding: '32px 30px 12px',
        justifyContent: 'center',
        alignItems: 'center',
  
        boxShadow: !props.transparent && '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: !props.transparent && '#FFFFFF',
        borderRadius: !props.transparent && 48,
      }
    ))
    