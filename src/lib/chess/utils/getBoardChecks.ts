import { Board, Color, Piece, PieceType, Position } from "@shared/types/chess";
import { getPossibleMoves } from "./getPossibleMoves";

export function getBoardChecks (board: Board, currentPlayer: Color): Piece[] {

    const checkPieces: Piece[] = []

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++) {
            const piece = board[i][j]
            let possibleMoves: Position[] = []
            if(piece !== null && piece.color !== currentPlayer) {
                possibleMoves = getPossibleMoves(piece, board)
                possibleMoves.forEach(item => {
                    if(board[item.row][item.col]?.type === PieceType.KING) {
                        checkPieces.push(piece)
                    }
                })
            }
        }
    }

    return checkPieces
}