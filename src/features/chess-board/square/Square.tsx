import { FC, useMemo } from "react";
import classNames from "classnames"
import { useDragEndDrop, useGameAction, useGameState } from "@provider";
import { Col, Piece, Position } from "@shared/types/chess"
import { PieceComponent } from "../piece/Piece"
import { isKingCheck, isPossitionInMoveList } from "./utils";
import { AttackPieceIcon, MovePieceIcon } from "@shared/assets/icon";

import styles from './Square.module.scss'
interface SquareProps {
    piece: Piece | null,
    position: Position,
}

export const Square: FC<SquareProps> = ({ piece, position }) => {
    const gameState = useGameState()
    const { select, move } = useGameAction()
    const { dragOver, drop } = useDragEndDrop()
    const isDark = (position.row + position.col) % 2 === 1

    const isPossibleMove = isPossitionInMoveList(position, gameState.possibleMoves)
    let isSpecialMove = false
    if(gameState.specialMoves !== null) {
        isSpecialMove = isPossitionInMoveList(position, gameState.specialMoves.position)
    }
    
    const handleMoveClick = () => {
        if(isPossibleMove || isSpecialMove) {
            return move(position)
        }
        if(piece !== null) {
            return select(piece)
        }
    }

    const status = useMemo(() => {
        if(piece && (isSpecialMove || isPossibleMove)) {
            return <AttackPieceIcon/>
        }
        if(!piece && (isSpecialMove || isPossibleMove)) {
            return <MovePieceIcon/>
        }
    }, [piece, isSpecialMove, isPossibleMove])
    
    return (
        <div
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => drop(e, position)}
            className={classNames(styles.square , {
                [styles.square_black]: isDark,
                [styles.square_white]: !isDark,
                [styles.сheck]: piece && isKingCheck(piece, gameState.checkPieces, gameState.currentPlayer),
            })}
            onClick={() => {
                handleMoveClick()
            }}>
            {status}
            {piece && (
                <PieceComponent
                    piece={piece}
                    position={position}
                />
            )}
            {position.row === 7 && (
                    <span className={classNames(styles.col_index, {
                        [styles.square_black]: isDark,
                        [styles.square_white]: !isDark,
                    })}>
                        {Col[position.col]}
                    </span>
                )
            }
            {position.col === 7 && (
                    <span className={classNames(styles.row_index, {
                        [styles.square_black]: isDark,
                        [styles.square_white]: !isDark,
                    })}>
                        {8 - position.row}
                    </span>
                )
            }
        </div>
    )
}