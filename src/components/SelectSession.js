import styled from "styled-components";
import MovieSessions from "./MovieSessions";
import SelectedMovie from "./SelectedMovie";

function SelectSession() {
    return (
        <Container>
            <h1>
                Selecione o horário
            </h1>
            <MovieSessions/>
            <SelectedMovie/>
        </Container>
    )
};

export default SelectSession;

const Container = styled.div`
    background-color: #FFFFFF;
    min-width: 375px;
    height: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 122px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    h1 {
        height: 110px;
        display: flex;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        margin-right: 30px;
        margin-bottom: 35px;
    }
`;