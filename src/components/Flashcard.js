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

    //Cartão Fechado
    if(type === 'ClosedQuestion'){
        return(
            <ClosedQuestion>
                <p>Pergunta {index + 1} </p>
                <img src={LogoSetaPlay} alt='LogoSetaPlay' onClick={() => setType('OpenQuestion')}/>
            </ClosedQuestion>
        );
    }
    
    //Cartão aberto e mostrando a pergunta
    if(type === 'OpenQuestion'){
        return(
            <OpenQuestion>
                <p>{card.question}</p>
                <img src={LogoSetaVirar} alt='LogoSetaVirar' onClick={() => setType('OpenQuestionWithButtons')}/>
            </OpenQuestion>
        );
    }

    //Cartão aberto e com os botões
    if(type === 'OpenQuestionWithButtons'){
        return(
            <OpenQuestion>
                <p>{card.answer}</p>
                <div>
                    <Button cor = '#FF3030' icon='iconeErrado' onClick={() => setType('CardDone')}> Não lembrei </Button>
                    <Button cor = '#FF922E' icon='iconeQuase' onClick={() => setType('CardDone')}> Quase não lembrei </Button>
                    <Button cor = '#2FBE34' icon='iconeCerto' onClick={() => setType('CardDone')}> Zap! </Button>
                </div>
            </OpenQuestion>
        );
    }

    //Cartão finalizado
    if(type === 'CardDone'){
        return(
            <CardDone>
                <p>CardDone</p>
                <img src={iconCerto} alt="IconAnswer" />
            </CardDone>
        );
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
        color: ${(props) => props.cor};
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

