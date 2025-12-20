import { FC } from "react";
import { Piece, Position } from "@shared/types/chess";
import { getPiece } from "./utils";
import classNames from "classnames";

import styles from './Piece.module.scss'
import { useDragEndDrop, useGameState } from "@provider";

interface PieceProps {
    piece: Piece;
    position?: Position;
}

export const PieceComponent: FC<PieceProps> = ({piece}) => {
    const gameState = useGameState()
    const { draggedPieceId, dragStart } = useDragEndDrop()

    return (
        <div
            draggable={gameState.currentPlayer === piece.color}
            onDragStart={() => piece && dragStart(piece)}
            className={classNames(styles.piece, {
                [styles.piece_draggable]: draggedPieceId === piece?.id
            })}
        >
            {getPiece(piece)}
        </div>
    )
}
