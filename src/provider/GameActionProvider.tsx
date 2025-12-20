"use client"

import { useGameDispatch, useGameState } from "./GameStateProvider";
import { FC, ReactNode, useContext, createContext, useMemo } from "react";
import { useModalStore } from "@entities/modal/model/store";
import { Piece, PieceType, Position } from "@shared/types/chess";

interface ContextProps {
    select: (piece: Piece) => void;
    move: (position: Position) => void;
}

const ActionContext = createContext<ContextProps>({
    select: () => {},
    move: () => {},
});

export const useGameAction = () => useContext(ActionContext);

export const GameActionProvider: FC<{ 
    children: ReactNode;
}> = ({ children }) => {

    const gameState = useGameState()
    const dispatch = useGameDispatch()
    const {showModal} = useModalStore()   

    const select = (piece: Piece) => {
        dispatch({
            type: 'SELECT_PIECE',
            payload: piece
        })
    }

    const move = ({...position}: Position) => {
        if(gameState.selectedPiece?.type === PieceType.PAWN && (position.row === 0 || position.row === 7)) {
            showModal('promote', gameState.selectedPiece)
        }
        dispatch({
            type: 'MOVE_PIECE',
            payload : position
        })
    }

    const contextValue = useMemo(() => ({
        select,
        move
    }), [select, move])

    return (
        <ActionContext.Provider value={contextValue}>
            {children}
        </ActionContext.Provider>
    )
}