import React, { useState } from 'react';

const TableGame = ({ player1, player2, jugada, turno, ...props }) => {
    const [winner, setWinner] = useState(null);
    const [cuadrantes, setCuadrantes] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])

    const setValor = (x, y) => {
        if (cuadrantes[x][y] === null) {
            cuadrantes[x][y] = jugada;
            setCuadrantes(cuadrantes);
        }
        getWinner()
    }

    const getWinner = () => {
        // Las horizontales
        if (cuadrantes[0][0] !== null && cuadrantes[0][1] !== null && cuadrantes[0][2] !== null) {
            if (cuadrantes[0][0] === cuadrantes[0][1] && cuadrantes[0][1] === cuadrantes[0][2]) {
                console.log("aqui");
                setWinner(true)
            }
        }
        if (cuadrantes[1][0] !== null && cuadrantes[1][1] !== null && cuadrantes[1][2] !== null) {
            if (cuadrantes[1][0] === cuadrantes[1][1] && cuadrantes[1][1] === cuadrantes[1][2]) {
                console.log("aqui");
                setWinner(true)
            }
        }
        if (cuadrantes[2][0] !== null && cuadrantes[2][1] !== null && cuadrantes[2][2] !== null) {
            if (cuadrantes[2][0] === cuadrantes[2][1] && cuadrantes[2][1] === cuadrantes[2][2]) {
                console.log("aqui");
                setWinner(true)
            }
        }

        // Verticales
        if (cuadrantes[0][0] !== null && cuadrantes[1][0] !== null && cuadrantes[2][0] !== null) {
            if (cuadrantes[0][0] === cuadrantes[1][0] && cuadrantes[1][0] === cuadrantes[2][0]) {
                console.log("aqui");
                setWinner(true)
            }
        }
        if (cuadrantes[0][1] !== null && cuadrantes[1][1] !== null && cuadrantes[2][1] !== null) {
            if (cuadrantes[0][1] === cuadrantes[1][0] && cuadrantes[1][1] === cuadrantes[2][1]) {
                console.log("aqui");
                setWinner(true)
            }
        }
        if (cuadrantes[0][2] !== null && cuadrantes[1][2] !== null && cuadrantes[2][2] !== null) {
            if (cuadrantes[0][2] === cuadrantes[1][2] && cuadrantes[1][2] === cuadrantes[2][2]) {
                console.log("aqui");
                setWinner(true)
            }
        }

        // Diagonales
        if (cuadrantes[0][0] !== null && cuadrantes[1][1] !== null && cuadrantes[2][2] !== null) {
            if (cuadrantes[0][0] === cuadrantes[1][1] && cuadrantes[1][1] === cuadrantes[2][2]) {
                console.log("aqui");
                setWinner(true)
            }
        }
        if (cuadrantes[2][0] !== null && cuadrantes[1][1] !== null && cuadrantes[0][2] !== null) {
            if (cuadrantes[2][0] === cuadrantes[1][1] && cuadrantes[1][1] === cuadrantes[0][2]) {
                console.log("aqui");
                setWinner(true)
            }
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Tic Tac Toe in ReactJS</h1>
                        {
                            !!winner ? (
                                <>
                                <h1>GANADOR</h1>
                                <button className="btn btn-info btn-sm"
                                onClick={props.reset}>Play Again</button>
                                </>

                            ) : (
                                    <h3>Turn: {turno ? player1 : player2}</h3>
                                )
                        }
                    </div>
                </div>
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