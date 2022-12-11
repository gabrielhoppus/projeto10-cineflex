import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SelectedSession({setMovieTitle, setMovieDay, setMovieDate}) {
    const [sessionInfo, setSessionInfo] = useState([]);
    const [sessionMovie, setSessionMovie] = useState([]);
    const [sessionTime, setSessionTime] = useState([]);
    const { sessionId } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`;
        const promise = axios.get(URL);

        promise.then(response => {
            setSessionTime(response.data);
            setSessionInfo(response.data.day);
            setSessionMovie(response.data.movie);
            setMovieTitle(sessionMovie.title);
            setMovieDay(sessionInfo.date);
            setMovieDate(sessionTime.name);
        });
        promise.catch(error => alert(error.response.data))
    }, [sessionId, sessionTime.name, sessionInfo.date, sessionMovie.title, setMovieDate, setMovieDay, setMovieTitle]);

    return (
        <Footer data-test="footer">
            <Wrapper>
                <img src={sessionMovie.posterURL} alt={sessionMovie.title} />
            </Wrapper>
            <span>
                <p>
                    {sessionMovie.title}
                </p>
                <p>
                    {sessionInfo.weekday} - {sessionTime.name}
                </p>
            </span>
        </Footer>
    )
}

export default SelectedSession;

const Wrapper = styled.div`
    min-width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-left: 14px;
    margin-right: 14px;
    img{
        width: 48px;
        height: 72px;
    }
`

const Footer = styled.div`
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    width: 100%;
    height: 117px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    span{
        width: 300px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        text-align: left;
        p{
            width: 300px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 30px;
            color: #293845;
        }
    }
`;