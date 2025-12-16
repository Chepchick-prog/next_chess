import { Board, Piece, Position } from "@shared/types/chess"

export const getPawnMove = (piece: Piece, board: Board): Position[] => {
    const possibleMoves: Position[] = []
    const position = piece.position
    const direction = piece.color === 0 ? -1 : 1
    const startRow = piece.color === 0 ? 6 : 1
    const maxStep = (piece.hasMoved || piece.position.row !== startRow) ? 1 : 2

    for(let i = 1; i <= maxStep; i++) {

        const newRow = position.row + (direction * i)

        if(newRow < 0 || newRow > 7) break

        const targetSquare = board[newRow][position.col]

        if(targetSquare === null) {
            possibleMoves.push({row: newRow, col: position.col})
        } else {
            break;
        }
    }

    const attackRow = position.row + direction

    if(attackRow >= 0 && attackRow <= 7) {

        const attackCols = [position.col - 1, position.col + 1]

        attackCols.forEach(attackCol => {
            if(attackCol < 0 || attackCol > 7) return

            const targetPiece = board[attackRow][attackCol]

            if(targetPiece !== null && targetPiece.color !== piece.color) {
                possibleMoves.push({row: attackRow, col: attackCol})
            }
        })
    }

    return possibleMoves;
}