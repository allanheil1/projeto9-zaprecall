import styled from 'styled-components'
import logo from '../assets/img/logo.png'


export default function Header(){
    return(
        <HeaderContainer>
            <img src = {logo} alt = 'ZapRecallLogo' />
            <p>ZapRecall</p>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
        width: 52px;
    }

    p {
        margin-left: 25px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #ffffff;
    }
`