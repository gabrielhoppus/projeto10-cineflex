import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SelectedMovie(){
    const [info, setInfo] = useState([]);
    const { movieId } = useParams();

    useEffect(() =>{
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;
        const promise = axios.get(URL);

        promise.then(response => {
            setInfo(response.data);
        });
        promise.catch(error => alert(error.response.data));
    }, [movieId]);

    return(
        <Footer data-test="footer">
            <div>
                <img src={info.posterURL} alt={info.title}/>
            </div>
            <p>
                {info.title}
            </p>
        </Footer>
    );

}

export default SelectedMovie;

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
    div{
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin-left: 14px;
        img{
            width: 48px;
            height: 72px;
        }
    }
    p{
        width: 300px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        text-align: left;
        margin-left: 14px;
    }
`;

