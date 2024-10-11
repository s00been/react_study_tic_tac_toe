import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [GameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // 메모리에 저장되는 새로운 배열 객체로서 기존 배열 요소를 자식요소로서 저장하고 있음.
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
            // 이 상태를 변경 불가능한 방식으로 업데이트하는 것
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {
                GameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                            )
                        }
                    </ol>
                </li>)
            }
        </ol>
    )
}