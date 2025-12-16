import { Color, GameAction, GameState, Piece, Position } from "@shared/types/chess";
import { getBoardChecks } from "../utils/getBoardChecks";
import { getPieceMove } from "../utils/getPieceMove";
import { getPossibleMoves } from "../utils/getPossibleMoves";
import { getStatusGame } from "../utils/getStatusGame";
import { isSquareAttacked } from "../rules/isSquareAttacked";
import { getSpecialMoves } from "../utils/getSpecialMoves";
import { PromotePiece } from "../utils/PromotePiece";
import { SpecialMovePiece } from "../utils/SpecialMovePiece";
import { initialGameState } from "../initital-game";

export const gameReducer = ( state: GameState, action: GameAction ): GameState => {

    let selectedPiece: Piece;

    if(action.type === "SELECT_PIECE") {

        if(state.currentPlayer === action.payload.color) {

            selectedPiece = action.payload

            if(state.selectedPiece?.id === action.payload?.id) {
                return {
                    ...state,
                    selectedPiece: null,
                    possibleMoves: [],
                    specialMoves: null,
                }
            } else {
                let newPossibleMoves: Position[] = getPossibleMoves(action.payload, state.board)
                newPossibleMoves = newPossibleMoves.filter(targetPosition => !isSquareAttacked(targetPosition, state.board, action.payload))
                const specialMoves = getSpecialMoves(action.payload, state.board, state.status, state.moveHistory)

                return {
                    ...state,
                    selectedPiece: selectedPiece,
                    possibleMoves: newPossibleMoves,
                    moveHistory: [...state.moveHistory],
                    specialMoves: specialMoves,
                }
            }
        }
    }

    if(action.type === "MOVE_PIECE") {

        if (!state.selectedPiece) return state;

        let newState: GameState = {...state}

        if(state.specialMoves?.position.some(position => position.row === action.payload.row && position.col === action.payload.col)) {
            newState = SpecialMovePiece(state, action.payload, state.selectedPiece)
        } else {
            newState = getPieceMove(state, action.payload, state.selectedPiece)
        }

        const checkPieces = getBoardChecks(newState.board, newState.currentPlayer)

        return {...newState, 
            status: getStatusGame(newState.board, newState.currentPlayer, checkPieces),
            checkPieces: checkPieces,
            specialMoves: null,
            selectedPiece: null,
            possibleMoves: [],
        }
    }

    if(action.type === 'PROMOTE_PAWN') {
        const newPosition = state.moveHistory[state.moveHistory.length - 1].to
        const currentPlayer: Color = action.payload.selectedPiece.color === 0 ? 1 : 0

        console.log(newPosition)
        const newBoard = PromotePiece(state.board, action.payload.selectedPiece, action.payload.promotion, newPosition);

        const checkPieces = getBoardChecks(newBoard, currentPlayer)

        return {...state, 
            board: newBoard,
            status: getStatusGame(newBoard, currentPlayer, checkPieces),
            checkPieces: checkPieces,
            specialMoves: null,
            selectedPiece: null,
            possibleMoves: [],
        }
    }

    switch(action.type) {
        case 'RESET_GAME':
            return initialGameState;
        case 'ROTATE_BOARD':
            const newBoard = state.board.map(row => {
                return row.reverse()
            })

            newBoard.reverse()

            return {
                ...state,
                board: newBoard,
            }
        default:
            return state
    }
} 