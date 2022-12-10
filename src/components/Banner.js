import styled from "styled-components"

function Banner() {
    return (
        <Header>
            CINEFLEX
        </Header>
    )
}

export default Banner

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #E8833A;
    justify-content: center;
`