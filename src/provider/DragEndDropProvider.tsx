"use client"

import React, { FC, ReactNode, useContext, useMemo, useState, createContext } from "react";
import { useGameState } from "./GameStateProvider";
import { Piece, Position } from "@shared/types/chess";
import { useGameAction } from "./GameActionProvider";

interface ContextProps {
    isDragging: boolean;
    draggedPieceId: string | null;
    dragStart: (piece: Piece) => void;
    dragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    drop: (event: React.DragEvent<HTMLDivElement>, position: Position) => void;
}

const DragEndDropContext = createContext<ContextProps>({
    isDragging: false,
    draggedPieceId: null,
    dragStart: () => {},
    dragOver: () => {},
    drop: () => {},
})

export const useDragEndDropContext = () => useContext(DragEndDropContext);

export const DragEndDropProvider: FC<{
    children: ReactNode;
}> = ({ children }) => {
    const gameState = useGameState()
    const {select, move} = useGameAction()
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [draggedPieceId, setDraggedPieceId] = useState<string | null>(null);

    const dragStart = (piece: Piece) => {
        select(piece)
        setDraggedPieceId(piece.id)
        setIsDragging(true);
    };

    const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const drop = (event: React.DragEvent<HTMLDivElement>, position: Position) => {
        event.preventDefault();

        const isValidMove = gameState.possibleMoves.some((targetPosition) => targetPosition.row === position.row && targetPosition.col === position.col)
        const isValidSpecialMove = gameState.specialMoves !== null && gameState.specialMoves.position.some((targetPosition) => targetPosition.row === position.row && targetPosition.col === position.col)

        if(isValidMove || isValidSpecialMove){
            move(position)
            setDraggedPieceId(null)
            setIsDragging(false);
        } else {
            console.log('Invalid move')
            return setIsDragging(false);
        }
    };

    const contextValue = useMemo(() => ({
        isDragging,
        draggedPieceId,
        dragStart,
        dragOver,
        drop,
    }), [isDragging, dragStart, dragOver, drop])

    return (
        <DragEndDropContext.Provider value={contextValue}>
            {children}
        </DragEndDropContext.Provider>
    )
}