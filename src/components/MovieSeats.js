import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function MovieSeats({selectedSeat, setSelectedSeat}) {
    const [seats, setSeats] = useState([]);
    const [color, setColor] = useState("#C3CFD9");
    const [border, setBorder] = useState("1px solid #7B8B99")
    const { sessionId } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`;
        const promise = axios.get(URL);

        promise.then(response => {
            setSeats(response.data.seats);
        });
        promise.catch(error => alert(error.response.data.seats));
    }, [sessionId]);

    function selectSeat(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível");
        } else if (color === "#1AAE9E" && selectedSeat.includes(seat.id)){
            setSelectedSeat(selectedSeat.filter(clicked => clicked !== seat.id))            
        }else{
            setColor("#1AAE9E");
            setBorder("1px solid #0E7D71")
            setSelectedSeat([...selectedSeat, seat.id]);
        }
    };

    return (
        <SeatContainer>
            {seats.map(seat => {
                return seat.isAvailable === false ? (
                    <SeatWrapper onClick={() => selectSeat(seat)} key={seat.id} background={"#FBE192"} border={"1px solid #F7C52B"}>
                        <Seat>
                            {seat.name.padStart(2, '0')}
                        </Seat>
                    </SeatWrapper>
                ) : (
                    <SeatWrapper
                        onClick={() => selectSeat(seat)}
                        key={seat.id}
                        background={selectedSeat.includes(seat.id) ? color : "#C3CFD9"}
                        border={selectedSeat.includes(seat.id) ? border : "1px solid #7B8B99"}
                    >
                        <Seat>
                            {seat.name.padStart(2, '0')}
                        </Seat>
                    </SeatWrapper>
                );
            })}
        </SeatContainer>
    );
};

export default MovieSeats;

const SeatContainer = styled.ul`
    width: 355px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 18px 7px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
`
const SeatWrapper = styled.div`
    width: 26px;
    height: 26px;
    left: 24px;
    top: 158px;
    background: ${props => props.background};
    border: ${props => props.border};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 12px;
`
const Seat = styled.li`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;
`