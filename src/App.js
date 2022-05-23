import { useState } from "react"

import { Square } from "./Square"

import "./App.css"

export default function App() {
    const [nextPlayer, setNextPlayer] = useState("X")
    const [count, setCount] = useState(0)
    const [figure, setFigures] = useState(Array(9).fill(""))

    const calculateWinner = () => {
        const array = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < array.length; i++) {
            const [a, b, c] = array[i]
            if (figure[a] && figure[a] === figure[b] && figure[b] === figure[c]) {
                return figure[a]
            }
        }
        return null
    }

    const startGame = () => {
        setFigures(Array(9).fill(""))
        setNextPlayer("X")
        setCount(0)
    }

    const clickBtn = (id) => {
        if (figure[id] === "") {
            setCount(count + 1)
            if (nextPlayer === "X") {
                figure[id] = "X"
                setNextPlayer("O")
            } else if (nextPlayer === "O") {
                figure[id] = "O"
                setNextPlayer("X")
            }
            const winner = calculateWinner()
            if (winner) {
                setNextPlayer(`${winner} win`)
            } else if (count === 8) {
                setNextPlayer("Draw")
            }
        }
    }

    return (
        <section className="conatiner">
            <div className="card">
                {figure.map((item, index) => {
                    return (
                        <div key={index} className="box">
                            <Square value={item} id={index} clickBtn={clickBtn} />
                        </div>
                    )
                })}
                <div className="description">
                    <p className="description-title">
                        {calculateWinner() ? `${calculateWinner()} Win` : `Next player: ${nextPlayer}`}
                    </p>
                    <button type="button" onClick={startGame} className="start-btn">
                        Start
                    </button>
                </div>
            </div>
        </section>
    )
}
