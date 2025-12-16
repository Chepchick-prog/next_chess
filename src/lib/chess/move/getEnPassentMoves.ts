import { Board, Color, Move, Piece, PieceType, Position } from "@shared/types/chess"

export const getEnPassentMoves = (piece: Piece, board: Board, lastMove: Move): Position[] => {
    let enPassentMoves: Position[] = []

    if(lastMove.piece.type !== PieceType.PAWN) return enPassentMoves;

    const prevPiece:Piece = lastMove.piece
    
    if(piece.color === Color.WHITE) {
        if(prevPiece.position.row === piece.position.row - 2 && prevPiece.position.col - 1 === piece.position.col) {
            enPassentMoves.push({row: piece.position.row - 1, col: piece.position.col + 1})
        }

        if(prevPiece.position.row === piece.position.row - 2 && prevPiece.position.col + 1 === piece.position.col) {
            enPassentMoves.push({row: piece.position.row - 1, col: piece.position.col - 1})
        }
    } else {
        if(prevPiece.position.row === piece.position.row + 2 && prevPiece.position.col - 1 === piece.position.col) {
            enPassentMoves.push({row: piece.position.row + 1, col: piece.position.col + 1})
        }

        if(prevPiece.position.row === piece.position.row + 2 && prevPiece.position.col + 1 === piece.position.col) {
            enPassentMoves.push({row: piece.position.row + 1, col: piece.position.col - 1})
        }
    }
    

    return enPassentMoves
}
