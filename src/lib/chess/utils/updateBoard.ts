import { Board, Position } from "@shared/types/chess"

export const updateBoard = (board : Board, selectedPiece: any, newPosition: Position) => {

    const prevPosition = selectedPiece.position

    return board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            if(rowIndex === prevPosition.row && colIndex === prevPosition.col) {
                return null
            } else if(rowIndex === newPosition.row && colIndex === newPosition.col) {
                return {...selectedPiece,
                    position: {row:rowIndex, col: colIndex},
                    hasMoved: true,
                }
            } else {
                return col
            }
        })
    })
}