import { Board, Piece, Position } from "@shared/types/chess";

export const EnPassantMove = (board: Board, position: Position, piece: Piece) => {

    const newBoard = board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            if(rowIndex === piece.position.row && colIndex === position.col) {
                return null
            } else if (rowIndex === piece.position.row && colIndex === piece.position.col) {
                 return null
            } else if(rowIndex === position.row && colIndex === position.col) {
                return {...piece,
                    position: {row:rowIndex, col: colIndex},
                    hasMoved: true,
                }
            } else {
                return col
            }
        })
    })

    return newBoard
}