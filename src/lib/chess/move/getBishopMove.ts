import { Board, Piece, Position } from "@shared/types/chess"

export const getBishopMove = (piece: Piece, board: Board): Position[] => {

    const position = piece.position

    let possibleMoves: Position[] = []

    for(let i = 1; i <= 8; i ++) {

        const activeSquare = {row: position.row - i, col: position.col - i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col - i
                        },
                    )

                } else {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col - i
                        },
                    )

                    break;
                }
            }
        }

    }

    for(let i = 1; i <= 8; i ++) {

        const activeSquare = {row: position.row + i, col: position.col + i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col + i
                        },
                    )

                } else {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col + i
                        },
                    )

                    break;
                }
            }
        } 
    }

    for(let i = 1; i <= 8; i ++) {

        const activeSquare = {row: position.row + i, col: position.col - i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col - i
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col - i
                        },
                    )

                    break;
                }
            }
        }
    }

    for(let i = 1; i <= 8; i ++) {

        const activeSquare = {row: position.row - i, col: position.col + i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col + i
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col + i
                        },
                    )

                    break;
                }
            }
        }
    }

    return possibleMoves
}