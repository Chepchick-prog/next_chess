import { Color, GameState, Piece, Position } from "@shared/types/chess";
import { updateBoard } from "./updateBoard";

export function getPieceMove (state: GameState, newPosition: Position, selectedPiece: Piece): GameState {

    const newBoard = updateBoard (state.board, selectedPiece, newPosition)

    const currentPlayer: Color = selectedPiece.color === 0 ? 1 : 0

    return {...state,
        board: newBoard,
        currentPlayer: currentPlayer,
        moveHistory: [
            ...state.moveHistory,
            {
                from: selectedPiece.position,
                to: newPosition,
                piece: selectedPiece,
                capturedPiece: state.board[newPosition.row][newPosition.col],
            }
        ],
    }
}