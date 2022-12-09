import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/loading.gif"
import { Link, useParams } from "react-router-dom";

function MovieSessions() {
    const [sessions, setSessions] = useState(undefined);
    const { movieId } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;
        const promise = axios.get(URL)

        promise.then(response => {
            setSessions(response.data.days)
        });
        promise.catch(error => alert(error.response.data));
    }, []);

    if (sessions === undefined) {
        return <img src={loading} alt="loading-gif" />;
    };

    return (
        <div>
            {sessions.map(session =>
                <SessionContainer key={session.id}>
                    <Date>
                        {session.weekday} - {session.date}
                    </Date>
                    <ButtonContainer>
                        {session.showtimes.map(time =>
                            <SessionButton key={time.id}>
                                {time.name}
                            </SessionButton>
                        )}
                    </ButtonContainer>

                </SessionContainer>

            )}
        </div>


    )
};

export default MovieSessions

const SessionContainer = styled.div`
    
`

const ButtonContainer = styled.div`
    display: flex;
`

const Date = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
`

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
    letter-spacing: 0.02em;
    color: #FFFFFF;
`