import styled from "@emotion/styled";

interface IProps {
  transparent?: boolean;
}
const Wrapper = styled.div((props: IProps) => ({
  display: "flex",
  minHeight: 220,
  padding: "32px 30px 12px",
  justifyContent: "center",
  alignItems: "center",

  boxShadow: !props.transparent && "0px 4px 4px rgba(0, 0, 0, 0.25)",
  background: !props.transparent && "#FFFFFF",
  borderRadius: !props.transparent && 48,

  "& div": {
    display: props.transparent && "flex",
    justifyContent: props.transparent && "center",
  },
}));
const MaxWidth = styled.div`
  max-width: 544px;
  width: 100%;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
    text-align: center;

    color: #371548;
    margin: 0;
  }
`;
export default function wrapper({ children, transparent = false }) {
  return (
    <Wrapper transparent={transparent}>
      <MaxWidth>{children}</MaxWidth>
    </Wrapper>
  );
}
