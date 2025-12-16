import { FC } from "react";
import { Piece, Position } from "@shared/types/chess";
import { getPiece } from "./utils";

import styles from './Piece.module.scss'

interface PieceProps {
    piece: Piece;
    position?: Position;
}

export const PieceComponent: FC<PieceProps> = ({piece}) => {

    return (
        <div className={styles.piece}>
            {getPiece(piece)}
        </div>
    )
}
