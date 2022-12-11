import styled from "styled-components";
import MovieSeats from "./MovieSeats";
import SelectedSession from "./SelectedSession";
import SeatInfo from "./SeatInfo";
import MovieForm from "./MovieForm";
import { useState } from "react"

function SelectSeat() {
    const [selectedSeat, setSelectedSeat] = useState([])
    const [seatNumber, setSeatNumber] = useState([])
    const [movieTitle, setMovieTitle] = useState("");
    const [movieDay, setMovieDay] = useState("");
    const [movieDate, setMovieDate] = useState("")

    return (
        <Container>
            <h1>
                Selecione o(s) assento(s)
            </h1>
            <MovieSeats
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
            />
            <SeatInfo/>
            <MovieForm selectedSeat={selectedSeat} seatNumber={seatNumber} movieTitle={movieTitle} movieDay={movieDay} movieDate={movieDate}/>
            <SelectedSession setMovieTitle={setMovieTitle} setMovieDay={setMovieDay} setMovieDate={setMovieDate}/>
        </Container>
    )
};

export default SelectSeat;

const Container = styled.div`
    background-color: #FFFFFF;
    min-width: 375px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 57px;
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
    }
`;