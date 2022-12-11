import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/loading.gif"
import { Link } from "react-router-dom";

function MovieList(){
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)

        promise.then(response => {
            setMovies(response.data)
        });
        promise.catch(error => alert(error.response.data))
    }, []);

    if(movies === undefined) {
		return <img src={loading} alt="loading-gif"/>;
	};

    return (
        <List>
            {movies.map(movie => 
                <Link key={movie.id} to={`/sessoes/${movie.id}`}>
                    <div data-test="movie">
                        <img src={movie.posterURL} alt={movie.title}/>
                    </div>   
                </Link>
                )}
        </List>
    );
};

export default MovieList;

const List = styled.ul`
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    display: flex;
    grid-gap: 10px 20px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    div{
        width: 145px;
        height: 209px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin-right: auto;
        margin-left: 12px;
        img {
            margin-right: auto;
            margin-left: auto;
            width: 129px;
            height: 193px;
        }
    }
`;