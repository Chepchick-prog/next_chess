"use client"
import { FC } from "react";
import { useGameState } from "@provider";
import { Square } from "../square";

import styles from './Board.module.scss'

export const Board: FC = () => {
    const gameState = useGameState()

    console.log(gameState)

    return (
        <div className={styles.board}>
            {gameState.board.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((piece, colIndex) => (
                        <Square
                            key={piece?.id || `${rowIndex}-${colIndex}`}
                            piece={piece}
                            position={{row: rowIndex, col: colIndex}}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}