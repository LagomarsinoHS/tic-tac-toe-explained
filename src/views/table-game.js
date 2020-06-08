import React, { useState } from 'react';

const TableGame = ({ player1, player2, jugada, ...props }) => {
    const [cuadrantes, setCuadrantes] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])

    const [counter, setCounter] = useState(0);

    const setValor = (x, y) => {
        if (cuadrantes[x][y] === "") {
            cuadrantes[x][y] = jugada;
            setCuadrantes(cuadrantes);
            setCounter(counter+1);
        }
    }

    const setWinner = () => {
        
    }

    return (
        <>
            <h1>Tic Tac Toe in ReactJS</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td onClick={(e) => {
                                        setValor(0, 0);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[0][0]}</td>
                                    <td onClick={(e) => {
                                        setValor(0, 1);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[0][1]}</td>
                                    <td onClick={(e) => {
                                        setValor(0, 2);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[0][2]}</td>
                                </tr>
                                <tr>
                                    <td onClick={(e) => {
                                        setValor(1, 0);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[1][0]}</td>
                                    <td onClick={(e) => {
                                        setValor(1, 1);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[1][1]}</td>
                                    <td onClick={(e) => {
                                        setValor(1, 2);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[1][2]}</td>
                                </tr>
                                <tr>
                                    <td onClick={(e) => {
                                        setValor(2, 0);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[2][0]}</td>
                                    <td onClick={(e) => {
                                        setValor(2, 1);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[2][1]}</td>
                                    <td onClick={(e) => {
                                        setValor(2, 2);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[2][2]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableGame;