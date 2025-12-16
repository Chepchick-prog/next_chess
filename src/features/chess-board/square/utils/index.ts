import { Color, Piece, PieceType, Position } from "@shared/types/chess"

export const isPossitionInMoveList = (position: Position, possibleMoves: Position[]) => {
    return possibleMoves.some(targetPosition => targetPosition.col === position.col && targetPosition.row === position.row)
}

export const isKingCheck = (piece: Piece, checkPieces: Piece[], currentPlayer: Color): Boolean => {
    if(piece.type === PieceType.KING && piece.color === currentPlayer && checkPieces.length !== 0) {
        return true;
    } else {
        return false;
    }
}