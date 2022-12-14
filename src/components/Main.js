import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Deck from './Deck'
import Footer from './Footer'
import cards from './cards'

export default function Main() {

  const[cont, setCont] = React.useState(0);
  
  return (
        <MainContainer>
          <Header />
          <Deck cards={cards} cont={cont} setCont={setCont}/>
          <Footer deckLength={cards.length} cont={cont}/>
        </MainContainer>
  );
}

//Styled-Components
const MainContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
