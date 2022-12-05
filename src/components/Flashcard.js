import React from 'react'
import styled from 'styled-components'
import LogoSetaPlay from '../assets/img/seta_play.png'
import LogoSetaVirar from '../assets/img/seta_virar.png'
import iconCerto from '../assets/img/icone_certo.png'
import iconQuase from '../assets/img/icone_quase.png'
import iconErrado from '../assets/img/icone_erro.png'

export default function Flashcard({index, card, cont, setCont}){

    //estado que controla o tipo de card a ser mostrado (varia conforme vamos avançando com os cliques)
    const [type, setType] = React.useState('ClosedQuestion');
    //estado que controla o ícone (errado, quase ou certo) a ser mostrado no CardDone
    const [icon, setIcon] = React.useState('');
    //estado que controla a cor do texto (verde se certo, vermelho se errado, laranja se quase) no CardDone
    const [titleColor, setTitleColor] = React.useState('');

    //A função/componente Flashcard deve retornar o tipo de cartão de acordo com o estado da variável 'type', que pode ser 'ClosedQuestion', 'OpenQuestion', 'OpenQuestionWithButtons' e 'CardDone'
    switch(type){
        case 'ClosedQuestion':
            return(
                <ClosedQuestion data-test='flashcard'>
                    <p data-test='flashcard-text'>Pergunta {index + 1} </p>
                    <img src={LogoSetaPlay} alt='LogoSetaPlay' onClick={() => setType('OpenQuestion')}/>
                </ClosedQuestion>
            );
            break;
        
        case 'OpenQuestion':
            return(
                <OpenQuestion data-test='flashcard'>
                    <p data-test='flashcard-text'>{card.question}</p>
                    <img data-test='turn-btn' src={LogoSetaVirar} alt='LogoSetaVirar' onClick={() => setType('OpenQuestionWithButtons')}/>
                </OpenQuestion>
            );
            break;

        case 'OpenQuestionWithButtons':
            return(
                <OpenQuestion data-test='flashcard'>
                    <p data-test='flashcard-text'>{card.answer}</p>
                    <div>
                        <Button data-test='no-btn' cor = '#FF3030' onClick={() => (setType('CardDone'), setIcon(iconErrado), setTitleColor('#FF3030'), setCont(cont + 1))}> Não lembrei </Button>
                        <Button data-test='partial-btn' cor = '#FF922E' onClick={() => (setType('CardDone'), setIcon(iconQuase), setTitleColor('#FF922E'), setCont(cont + 1))}> Quase não lembrei </Button>
                        <Button data-test='zap-btn' cor = '#2FBE34' onClick={() => (setType('CardDone'), setIcon(iconCerto), setTitleColor('#2FBE34'), setCont(cont + 1))}> Zap! </Button>
                    </div>
                </OpenQuestion>
            );
            break;

        case 'CardDone':
            return(
                <CardDone data-test='flashcard' titleColor = {titleColor}>
                    <p data-test='flashcard-text'>Pergunta {index + 1} </p>
                    <img data-test='zap-icon' src={icon} alt="IconAnswer" />
                </CardDone>
            );
            break;
    }
}

//Styled-Components
const ClosedQuestion = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const OpenQuestion = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }

    div {
        display: flex;
    }
`

const CardDone = styled.div`    
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.titleColor};
        text-decoration: line-through;
    }
`

const Button = styled.button`
    width: 100px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background-color: ${(props) => props.cor};
    border-radius: 5px;
    border: none;
    margin: 0px 8px;
    padding: 5px;
`

