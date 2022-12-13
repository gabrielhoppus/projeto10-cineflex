import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/loading.gif";
import { Link, useParams } from "react-router-dom";

function MovieSessions() {
    const [sessions, setSessions] = useState(undefined);
    const { movieId } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;
        const promise = axios.get(URL);

        promise.then(response => {
            setSessions(response.data.days);
        });
        promise.catch(error => alert(error.response.data.days));
    }, [movieId]);

    if (sessions === undefined) {
        return <img src={loading} alt="loading-gif" />;
    }

    return (
        <div>
            {sessions.map(session =>
                <SessionContainer data-test="movie-day" key={session.id}>
                    <MovieDate>
                        {session.weekday} - {session.date}
                    </MovieDate>
                    <ButtonContainer>
                        {session.showtimes.map(time =>
                            <StyledLink key={time.id} to={`/assentos/${time.id}`}>
                                <SessionButton data-test="showtime">
                                    {time.name}
                                </SessionButton>
                            </StyledLink>
                        )}
                    </ButtonContainer>
                </SessionContainer>
            )}
        </div>
    )
}

export default MovieSessions

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const SessionContainer = styled.div`
    width: 375px;
    margin-left: 24px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    grid-gap: 0px 9px;
`;

const MovieDate = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
`;

const SessionButton = styled.button`
    background-color: #E8833A;
    width: 82px;
    height: 43px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    border: none;
    border-radius: 3px;
    margin-top: 22px;
    margin-bottom: 23px;
    a {text-decoration: none;}
`;