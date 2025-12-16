import { Piece, Position } from "@shared/types/chess"

export const getKnightMove = (piece: Piece): Position[] => {

    let possibleMoves: Position[] = [
        {
            row: piece.position.row + 2,
            col: piece.position.col + 1
        },
        {
            row: piece.position.row + 2,
            col: piece.position.col - 1
        },
        {
            row: piece.position.row - 2,
            col: piece.position.col + 1
        },
        {
            row: piece.position.row - 2,
            col: piece.position.col - 1
        },
        {
            row: piece.position.row - 1,
            col: piece.position.col - 2
        },
        {
            row: piece.position.row - 1,
            col: piece.position.col + 2
        },
        {
            row: piece.position.row + 1,
            col: piece.position.col - 2,
        },
        {
            row: piece.position.row + 1,
            col: piece.position.col + 2,
        },
    ]

    return possibleMoves
}