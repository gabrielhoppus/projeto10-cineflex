import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieForm({ selectedSeat, seatNumber, movieTitle, movieDay, movieDate}) {
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");
    const navigate = useNavigate()
    const seats = [...selectedSeat]
    const seatNumbers = [...seatNumber]

    function registerSeats(e) {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
        const data = {
            ids: seats,
            name: name,
            cpf: cpf,
        };
        const promise = axios.post(URL, data)

        promise.then(() => navigate("/sucesso", {state:{name, cpf, seatNumbers, movieTitle, movieDay, movieDate}}))
        promise.catch(error => error.response.data)


        e.preventDefault();

    }

    return (
        <Form onSubmit={registerSeats}>
            <Label htmlFor="name">
                Nome do Comprador:
                <Input
                    data-test="client-name"
                    id="name"
                    type="text"
                    placeholder="Digite seu nome..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </Label>
            <Label htmlFor="cpf">
                CPF do comprador:
                <Input
                    data-test="client-cpf"
                    id="cpf"
                    type="text"
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={e => setCPF(e.target.value)}
                    required
                />
            </Label>
            <SubmitButton data-test="book-seat-btn">
                Reservar assento(s)
            </SubmitButton>
        </Form>
    );
};

export default MovieForm;

const Form = styled.form`
    width: 327px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    grid-gap: 7px 0;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 327px;
    height: 51px;
    font-size: 18px;
    ::placeholder{
        font-style: italic;
        font-size: 18px;
        color: #AFAFAF;
        padding-left: 18px;
    }
`;

const SubmitButton = styled.button`
        margin-left: auto;
        margin-right: auto;
        margin-top: 37px;
        background: #E8833A;
        width: 225px;
        height: 42px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        border-radius: 3px;
        border: none;
`