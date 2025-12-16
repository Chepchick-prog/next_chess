import { Board, GameStatus, Move, Piece, PieceType, Position, SpecialMove } from "@shared/types/chess";
import { getCastlingMoves } from "./getCastlingMoves";
import { getEnPassentMoves } from "./getEnPassentMoves";

export const getSpecialMoves = (piece: Piece, board: Board, status: GameStatus, moveHistory: Move[]): SpecialMove | null => {

    const lastMove = moveHistory[moveHistory.length - 1]

    if(piece.type === PieceType.KING && status === 'playing') {
        return {
            type: 'castling',
            position: getCastlingMoves(piece, board) as Position[],
        }
    } else if(piece.type === PieceType.PAWN && lastMove) {
        return {
            type: 'enPassent',
            position: getEnPassentMoves(piece, board, lastMove) as Position[],
        }
    } else {
        return null
    }
}