import { Board, Color, GameState, Piece, PieceType, Position } from "@shared/types/chess"

export const createPiece = (type: PieceType, color: Color, position: Position): Piece => {
    return {
        id: `${color}-${PieceType[type]}-${position.col}`,
        type,
        color,
        position,
        hasMoved: false,
    }
}

export const createInitialBoard = (): Board => {
    const board: Board = Array(8).fill(null).map(() => Array(8).fill(null))

    // board[0][0] = createPiece(PieceType.ROOK, Color.BLACK, {row: 0, col: 0})
    // board[0][1] = createPiece(PieceType.KNIGHT, Color.BLACK, {row: 0, col: 1})
    board[0][2] = createPiece(PieceType.BISHOP, Color.BLACK, {row: 0, col: 2})
    // board[0][3] = createPiece(PieceType.QUEEN, Color.BLACK, {row: 0, col: 3})
    board[0][4] = createPiece(PieceType.KING, Color.BLACK, {row: 0, col: 4})
    // board[0][5] = createPiece(PieceType.BISHOP, Color.BLACK, {row: 0, col: 5})
    // board[0][6] = createPiece(PieceType.KNIGHT, Color.BLACK, {row: 0, col: 6})
    // board[0][7] = createPiece(PieceType.ROOK, Color.BLACK, {row: 0, col: 7})

    // for(let i = 0; i <= 7; i++) {
    //     board[1][i] = createPiece(PieceType.PAWN, Color.BLACK, {row: 1, col: i})
    // }

    // for(let i = 0; i <= 7; i++) {
    //     board[6][i] = createPiece(PieceType.PAWN, Color.WHITE, {row: 6, col: i})
    // }

    // board[7][0] = createPiece(PieceType.ROOK, Color.WHITE, {row: 7, col: 0})
    // board[7][1] = createPiece(PieceType.KNIGHT, Color.WHITE, {row: 7, col: 1})
    // board[7][2] = createPiece(PieceType.BISHOP, Color.WHITE, {row: 7, col: 2})
    board[7][3] = createPiece(PieceType.QUEEN, Color.WHITE, {row: 7, col: 3})
    board[7][4] = createPiece(PieceType.KING, Color.WHITE, {row: 7, col: 4})
    // board[7][5] = createPiece(PieceType.BISHOP, Color.WHITE, {row: 7, col: 5})
    // board[7][6] = createPiece(PieceType.KNIGHT, Color.WHITE, {row: 7, col: 6})
    // board[7][7] = createPiece(PieceType.ROOK, Color.WHITE, {row: 7, col: 7})


    board[1][2] = createPiece(PieceType.PAWN, Color.WHITE, {row: 1, col: 2})


    return board;
}

export const initialGameState : GameState = {
    board: createInitialBoard(),
    currentPlayer: Color.WHITE,
    selectedPiece: null,
    possibleMoves: [],
    moveHistory: [],
    status: 'playing',
    checkPieces: [],
    specialMoves: null,
}