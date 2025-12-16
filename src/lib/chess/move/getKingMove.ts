import { Piece, Board, Position } from "@shared/types/chess"

const isSquareValid = (position: Position): boolean => {
    return (position.row >= 0 && position.row <= 7) && (position.col >= 0 && position.col <= 7)
}

export const getKingMove = (piece: Piece, board: Board): Position[] => {
    const position = piece.position
    let possibleMoves: Position[] = []
    let moveSquare: Piece | null
    let isValid: boolean

    const topSquare = {row: position.row - 1, col: position.col}
    if(isSquareValid(topSquare)){
        moveSquare  = board[topSquare.row][topSquare.col]
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(topSquare)
        }
    }
    
    const bottomSquare = {row: position.row + 1, col: position.col}
    if(isSquareValid(bottomSquare)){
        moveSquare = board[bottomSquare.row][bottomSquare.col]
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(bottomSquare)
        }
    }

    const leftSquare = {row: position.row, col: position.col - 1}
    if(isSquareValid(leftSquare)){
        moveSquare = board[leftSquare.row][leftSquare.col]
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(leftSquare)
        }
    }

    const rightSquare = {row: position.row, col: position.col + 1}
    if(isSquareValid(rightSquare)){
        moveSquare = board[rightSquare.row][rightSquare.col]    
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(rightSquare)
        }
    }

    const topLeftSquare = {row: position.row - 1, col: position.col - 1}
    if(isSquareValid(topLeftSquare)){
        moveSquare = board[topLeftSquare.row][topLeftSquare.col]
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(topLeftSquare)
        }
    }

    const topRightSquare = {row: position.row - 1, col: position.col + 1}
    if(isSquareValid(topRightSquare)){
        moveSquare = board[topRightSquare.row][topRightSquare.col]
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(topRightSquare)
        }
    }

    const bottomLeftSquare = {row: position.row + 1, col: position.col - 1}
    if(isSquareValid(bottomLeftSquare)){
        moveSquare = board[bottomLeftSquare.row][bottomLeftSquare.col]
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(bottomLeftSquare)
        }
    }

    const bottomRightSquare = {row: position.row + 1, col: position.col + 1}
    if(isSquareValid(bottomRightSquare)){
        moveSquare = board[bottomRightSquare.row][bottomRightSquare.col]
        isValid = moveSquare === null || moveSquare?.color !== piece.color
        if(isValid) {
            possibleMoves.push(bottomRightSquare)
        }
    }

    return possibleMoves
}