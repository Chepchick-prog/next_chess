import { FC } from "react";
import classNames from "classnames"
import { useGameDispatch, useGameState } from "@provider";
import { Col, Piece, PieceType, Position } from "@shared/types/chess"
import { PieceComponent } from "../piece/Piece"
import { useModalStore } from "@entities/modal/model/store";
import { isKingCheck, isPossitionInMoveList } from "./utils";

import styles from './Square.module.scss'
import { AttackPieceIcon, MovePieceIcon } from "@shared/assets/icon";

interface SquareProps {
    piece: Piece | null,
    position: Position,
}

export const Square: FC<SquareProps> = ({ piece, position }) => {
    const gameState = useGameState()
    const dispatch = useGameDispatch()
    const {showModal} = useModalStore()   
    const isDark = (position.row + position.col) % 2 === 1

    const isPossibleMove = isPossitionInMoveList(position, gameState.possibleMoves)
    let isSpecialMove = false
    if(gameState.specialMoves !== null) {
        isSpecialMove = isPossitionInMoveList(position, gameState.specialMoves.position)
    }
    
    const selectedPiece = (piece: Piece) => {
        dispatch({
            type: 'SELECT_PIECE',
            payload: piece
        })
    }

    const movePiece = ({...position}: Position) => {
        if(gameState.selectedPiece?.type === PieceType.PAWN && (position.row === 0 || position.row === 7)) {
            showModal('promote', gameState.selectedPiece)
        }

        dispatch({
            type: 'MOVE_PIECE',
            payload : position
        })
    }

    const handleMoveClick = () => {
        if(isPossibleMove || isSpecialMove) {
            return movePiece(position)
        }
        if(piece !== null) {
            return selectedPiece(piece)
        }
    }
    
    return (
        <div 
            className={classNames(styles.square , {
                [styles.square_black]: isDark,
                [styles.square_white]: !isDark,
                [styles.сheck]: piece && isKingCheck(piece, gameState.checkPieces, gameState.currentPlayer),
                [styles.squere_piece]: piece !== null,
            })}
            onClick={() => {
                handleMoveClick()
            }}>
            {(piece && (isSpecialMove || isPossibleMove)) && <AttackPieceIcon/>}
            {(!piece && (isSpecialMove || isPossibleMove)) && <MovePieceIcon/>}
            {piece && (
                <PieceComponent
                    piece={piece}
                    position={position}
                />
            )}
            {/* {position.col === 7 && (
                <span className={classNames(styles.row_index, {
                    [styles.square_black]: isDark,
                    [styles.square_white]: !isDark,
                })}>
                    {8 - position.row}
                </span>)}
            {position.row === 7 && <span className={styles.col_index}>{Col[position.col]}</span>} */}
        </div>
    )
}