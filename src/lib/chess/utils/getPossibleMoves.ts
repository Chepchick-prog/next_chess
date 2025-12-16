import { Board, Piece, PieceType, Position } from "@shared/types/chess";
import { getBishopMove } from "../move/getBishopMove";
import { getKingMove } from "../move/getKingMove";
import { getKnightMove } from "../move/getKnightMove";
import { getPawnMove } from "../move/getPawnMove";
import { getQueenMove } from "../move/getQueenMove";
import { getRookMove } from "../move/getRookMove";

export function getPossibleMoves (piece: Piece, board: Board): Position[] {

    let possibleMoves: Position[] = []

    switch(piece.type){
        case PieceType.PAWN:
            possibleMoves = getPawnMove(piece, board);
            break;
        case PieceType.KNIGHT:
            possibleMoves = getKnightMove(piece);
            break;
        case PieceType.BISHOP:
            possibleMoves = getBishopMove(piece, board);
            break;
        case PieceType.ROOK:
            possibleMoves = getRookMove(piece, board);
            break;
        case PieceType.QUEEN:
            possibleMoves = getQueenMove(piece, board);
            break;
        case PieceType.KING:
            possibleMoves = getKingMove(piece, board);
            break;
        default: 
            console.error('Piece type is not defined')
            break;
    }

    possibleMoves = possibleMoves.filter(targetPosition => (targetPosition.row >= 0 && targetPosition.row <= 7) && (targetPosition.col >= 0 && targetPosition.col <= 7))
    possibleMoves = possibleMoves.filter(targetPosition => board[targetPosition.row][targetPosition.col]?.color !== piece.color)

    return possibleMoves;
}