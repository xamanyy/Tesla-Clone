import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade'

function Section(props) {
  return (
    <Wrap bgImg={props.bgi}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.desp}</p>
        </ItemText>
      </Fade>
      <Container>
        <Fade bottom>
          <WrapButton>
            <LeftButton>{props.lftbtn}</LeftButton>
            {props.rghtbtn && <RightButton>{props.rghtbtn}</RightButton>}{" "}
            {/* To make it center */}
          </WrapButton>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Container>
    </Wrap>
  );
}

export default Section

const Wrap = styled.div`
width: 100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
/* background-image: url(/images/model-s.jpg); */
display:flex;
flex-direction:column;
justify-content:space-between;
background-image: ${props => `url("/images/${props.bgImg}")` };
`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const WrapButton = styled.div`
display:flex;
justify-content:center;
margin-bottom:32px;

@media (max-width: 768px){
  flex-direction:column;
  align-items:center;
}
`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius: 95px;
opacity:0.86px;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin:7px;
`

const RightButton = styled(LeftButton)`

background: white;
opacity: 0.75;
color: black;
`

const DownArrow = styled.img`
  margin-top: 18px;
  height: 40px;
  animation: down infinite 1.3s;


  @keyframes down {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(4.5px);
    }

    60% {
      transform: translateY(3.2px);
    }
  }
`;

const Container = styled.div`

`