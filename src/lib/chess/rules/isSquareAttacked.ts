import { Board, Piece, Position } from "@shared/types/chess"
import { getBoardChecks } from "../utils/getBoardChecks"
import { updateBoard } from "../utils/updateBoard"

export const isSquareAttacked = (position: Position, board: Board, piece: Piece ):boolean => {

    const virtualBoard = updateBoard(board, piece, position)

    const checkPieces = getBoardChecks(virtualBoard, piece.color) as Piece[]

    const kingIsAfterCheck: boolean = checkPieces.length > 0

    return kingIsAfterCheck
}