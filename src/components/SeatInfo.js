import styled from "styled-components";

function SeatInfo() {
    return (
        <Container>
            <InfoContainer>
                <Wrapper background={"#1AAE9E"} border={"1px solid #0E7D71"}/>
                <span>Selecionado</span>
            </InfoContainer>
            <InfoContainer>
                <Wrapper background={"#C3CFD9"} border={"1px solid #7B8B99"}/>
                <span>Disponível</span>
            </InfoContainer>
            <InfoContainer>
                <Wrapper background={"#FBE192"} border={"1px solid #F7C52B"}/>
                <span>Indisponível</span>
            </InfoContainer>
        </Container>
    )
}

export default SeatInfo;

const Container = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top 18px;
    grid-gap: 14px;
`;

const InfoContainer = styled.div`
    displey: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`;

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    width: 25px;
    height: 25px;
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: 17px;
`;