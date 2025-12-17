import { Color, GameState, Piece, Position } from "@shared/types/chess";
import { updateBoard } from "./updateBoard";

export function getPieceMove (state: GameState, newPosition: Position, selectedPiece: Piece): GameState {

    const newBoard = updateBoard (state.board, selectedPiece, newPosition)

    return {...state,
        board: newBoard,
    }
}