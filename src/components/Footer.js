import styled from 'styled-components'

export default function Footer({deckLength, cont}){
    return(
        <FooterContainer>
            <p>{cont}/{deckLength} CONCLUÍDOS</p>
        </FooterContainer>
    );
}

//Styled-Components
const FooterContainer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`