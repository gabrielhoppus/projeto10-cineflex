import styled from "styled-components";
import { useLocation, Link } from 'react-router-dom';


function SuccessPage() {
    const location = useLocation();
    const seats = [...location.state.seatNumbers];

    return (
        <Container>
            <Header>Pedido feito com sucesso!</Header>
            <InfoContainer data-test="movie-info">
                <h2>Filme e Sessão</h2>
                <p>
                    {location.state.movieTitle}
                </p>
                <Session>
                    {location.state.movieDay}
                    {" "}
                    {location.state.movieDate}
                </Session>
            </InfoContainer>
            <InfoContainer data-test="seats-info">
                <h2>Ingressos</h2>
                {seats.map(seat =>
                    <div key={seat}>
                        Assento{" "}{seat}
                    </div>
                )}
            </InfoContainer>
            <InfoContainer data-test="client-info">
                <h2>Comprador</h2>
                <h3>
                    Nome: {" "}
                    {location.state.name}
                </h3>
                <h3>
                    CPF: {" "}
                    {location.state.cpf}
                </h3>
            </InfoContainer>
            <StyledLink to={"/"}>
                <Button data-test="go-home-btn">Voltar pra Home</Button>
            </StyledLink>
        </Container>
    );
}

export default SuccessPage;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Button = styled.button`
    margin-left: auto;
    margin-right: auto;
    margin-top: 62px;
    width: 225px;
    height: 42px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: none;
    letter-spacing: 0.04em;
    background: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
`;

const Container = styled.div`
    margin-top: 100px;
    width: 375px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    h2{
        margin-bottom: 10px;
        margin-top: 40px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;

const InfoContainer = styled.div`

    margin-left: 29px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    p{
        display: flex;
        flex-direction: column;
    }
`;

const Session = styled.div`
    margin-top: 4px;
`;

const Header = styled.h1`
    width: 170px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #247A6B;
    padding-right: 29px;
`;