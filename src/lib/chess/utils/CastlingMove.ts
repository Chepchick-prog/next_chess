import { Board, Position } from "@shared/types/chess";
import { updateBoard } from "./updateBoard";

export const CastlingMove = (board : Board, position: Position): Board => {

    console.log('position', position)

    let newBoard: Board = {...board};

    if(position.col > 4) {
        newBoard = castlingRights(board, position)
    } else {
        newBoard = castlingLefts(board, position)
    }

    return newBoard;
}

const castlingRights = (board: Board, position: Position): Board => {

    const rook = board[position.row][7]
    const newRookPosition = {row: position.row, col: 5}
    const king = board[position.row][4]
    const newKingPosition = {row: position.row, col: 6}

    let newBoard = updateBoard(board, rook, newRookPosition)

    newBoard = updateBoard(newBoard, king, newKingPosition)

    return newBoard;
    
}

const castlingLefts = (board: Board, position: Position): Board => {

    const rook = board[position.row][0]
    const newRookPosition = {row: position.row, col: 3}
    const king = board[position.row][4]
    const newKingPosition = {row: position.row, col: 2}

    let newBoard = updateBoard(board, rook, newRookPosition)

    newBoard = updateBoard(newBoard, king, newKingPosition)

    return newBoard;
    
}