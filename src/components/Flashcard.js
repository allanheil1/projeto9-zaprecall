import styled from 'styled-components'
import LogoSetaPlay from '../assets/img/seta_play.png'
import LogoSetaVirar from '../assets/img/seta_virar.png'
import icon from '../assets/img/icone_erro.png'

export default function Flashcard(){
    return(
        <>
            <ClosedQuestion>
                <p>Card Fechado</p>
                <img src={LogoSetaPlay} alt='LogoSetaPlay' />
            </ClosedQuestion>
            <OpenQuestion>
                <p>Pergunta Card Aberto</p>
                <img src={LogoSetaVirar} alt='LogoSetaVirar' />
            </OpenQuestion>
            <OpenQuestion>
                <p>Pergunta Card Aberto</p>
                <img src={LogoSetaVirar} alt='LogoSetaVirar' />
            </OpenQuestion>
            <CardDone>
                <p>CardDone</p>
                <img src={icon} alt="IconAnswer" />
            </CardDone>
        </>

    );
}

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

