export enum Col {a, b, c, d, e, f, g, h}

export enum PieceType { PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING };
export enum Color { WHITE, BLACK };
export type Position = {row: number, col: number}
export type Board = (Piece | null)[][];
export type GameStatus = 'playing' | 'check' | 'checkmate' | 'stalemate' | 'promote'
export type SpecialMoveType = 'castling' | 'enPassent'

export interface SpecialMove {
    type: SpecialMoveType,
    position: Position[],
}
export interface Piece {
    id: string,
    type: PieceType,
    color: Color,
    position: Position,
    hasMoved?: boolean
}

export interface Move {
    from: Position,
    to: Position,
    piece: Piece,
    capturedPiece?: Piece | null,
    promotion?: PieceType,
    isCheck?: boolean,
    isCheckmate?: boolean,
}

export interface GameState {
    board: Board,
    currentPlayer: Color,
    selectedPiece: Piece | null,
    possibleMoves: Position[],
    moveHistory: Move[],
    status: GameStatus,
    checkPieces: Piece[],
    specialMoves: SpecialMove | null,
}

export type GameAction = 
    | { type: 'SELECT_PIECE'; payload: Piece }
    | { type: 'MOVE_PIECE'; payload: Position }
    | { type: 'PROMOTE_PAWN'; payload: {selectedPiece: Piece, promotion: PieceType} }
    | { type: 'RESET_GAME' }
    | { type: 'ROTATE_BOARD' }