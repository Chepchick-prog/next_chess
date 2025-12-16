import { Board, Color, GameStatus, Piece } from "@shared/types/chess"
import { getPossibleMoves } from "./getPossibleMoves"
import { isSquareAttacked } from "../rules/isSquareAttacked";

export const getStatusGame = (board: Board, currentPlayer: Color, checkPieces: Piece[]): GameStatus => {

    let PossibleMovesPiece: Piece[] = []
    
    for(let i = 0; i < 8; i ++) {
        for(let j = 0; j < 8; j++) {
            const selectPiece = board[i][j];

            if(selectPiece !== null && selectPiece.color === currentPlayer) {
                let possibleMoves = getPossibleMoves(selectPiece, board)

                possibleMoves = possibleMoves.filter(targetPosition => !isSquareAttacked(targetPosition, board, selectPiece))

                if(possibleMoves.length > 0) {
                    PossibleMovesPiece.push(selectPiece)
                }
            }
        }
    }

    if(PossibleMovesPiece.length > 0 && checkPieces.length > 0) {
        return 'check'
    }
    if(PossibleMovesPiece.length === 0 && checkPieces.length > 0) {
        return 'checkmate';
    }
    if(PossibleMovesPiece.length === 0 && checkPieces.length === 0) {
        return 'stalemate';
    }

    return 'playing'
}
