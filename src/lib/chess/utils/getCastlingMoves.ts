import { Board, Piece, PieceType, Position } from "@shared/types/chess"
import { isSquareAttacked } from "../rules/isSquareAttacked";

export const getCastlingMoves = (king: Piece, board: Board): Position[] => {
    let castlingMoves: Position[] = []

    if(king.hasMoved) return castlingMoves;

    for(let i = 3; i >= 0; i--) {
        const position: Position = {row: king.position.row, col: i}
        const selectedPiece = board[position.row][position.col]

        console.log('its left ', position)

        if(selectedPiece === null) {
            console.log('is attacked', isSquareAttacked(position, board, king))
            if(!isSquareAttacked(position, board, king)) continue;
        }

        if (selectedPiece !== null) {
            if(selectedPiece.type === PieceType.ROOK && !selectedPiece.hasMoved) {
                castlingMoves = [{...selectedPiece.position}, {...selectedPiece.position, col: 2}]
            } else {
                break;
            }
        } else {
            break;
        }
    }

    for(let i = 5; i < 8; i++) {
        const position: Position = {row: king.position.row, col: i}
        const selectedPiece = board[position.row][position.col]

        if(selectedPiece === null) {
            if(!isSquareAttacked(position, board, king)) continue;
        }

        if (selectedPiece !== null) {
            if(selectedPiece.type === PieceType.ROOK && !selectedPiece.hasMoved) {
                castlingMoves = [...castlingMoves, {...selectedPiece.position}, {...selectedPiece.position, col: 6}]
            } else {
                break;
            }
        } else {
            continue;
        }
    }
    
    console.log(castlingMoves)

    return castlingMoves;
}
