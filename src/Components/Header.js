/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import styled from 'styled-components'
import icon from '@material-ui/icons/Menu'
import cl from '@material-ui/icons/Close'
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux";

function Header() {
const [burgerOpen, setup] = useState(false);

const cars =  useSelector(selectCars);


  return (
    <Container>
      <a href="#">
        <img src="./images/logo.svg" alt=""></img>
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Tesla Account</a>
          </li>
        </ul>
        <CustomMenu onClick={() => setup(true)} />
      </RightMenu>

      <BurgerMenu show={burgerOpen}>
        <Wrapper>
          <CustomClose onClick={() => setup(false)} />
        </Wrapper>
        <ul>
          {cars &&
            cars.map((car, index) => (
              <li>
                <a key={index} href="#">{car}</a>
              </li>
            ))}
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Tutorial</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </BurgerMenu>
    </Container>
  );
}

export default Header;


const Container = styled.div`
min-height: 60px;
position: fixed;
display:flex;
justify-content:space-between;
align-items: center;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu = styled.div`
  flex: 1;

  @media (max-width: 950px) {
    display: none;
  }


    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      padding: 0 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
 
`

const RightMenu = styled.div`
  display: flex;
  margin-right: 2px;
  align-items: center;

  ul {
    display: flex;
    flex: 2;
    justify-content: center;
    list-style-type: none;
  }

  li {
    align-items: center;
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      padding: 0 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;
const CustomMenu = styled(icon)`
cursor: pointer;
`

const BurgerMenu = styled.div`
  background: white;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  padding: 20px;
  display: flex;
  text-align: left;
  flex-direction: column;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s  ease-in-out ;
  li {
    padding: 14px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      padding: 0 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  ul {
    list-style-type: none;
  }
`

const CustomClose = styled(cl)`
margin-bottom:20px;
cursor: pointer;
`
const Wrapper = styled.div`
display:flex;
justify-content: flex-end;
`