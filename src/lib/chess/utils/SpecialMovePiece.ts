import { Board, GameState, Piece, Position } from "@shared/types/chess"
import { CastlingMove } from "./CastlingMove";
import { EnPassantMove } from "./EnPassantMove";

export const SpecialMovePiece = (state: GameState, position: Position, piece: Piece): Board => {

    let board: Board = {...state.board};

    if(state.specialMoves?.type === 'castling') {
        board = CastlingMove(state.board, position)
    }
    else if(state.specialMoves?.type === 'enPassent') {
        board = EnPassantMove(state.board, position, piece)
    }

    return board
}