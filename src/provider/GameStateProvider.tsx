'use client'
import React, { createContext, FC, ReactNode, useContext, useReducer } from "react"
import { GameAction, GameState } from '@shared/types/chess'
import { initialGameState } from "@lib/chess/initital-game"
import { gameReducer }  from "@lib/chess/game-reducer"

const StateContext = createContext<GameState>(initialGameState)
const DispatchContext = createContext<React.Dispatch<GameAction> | undefined>(undefined)

export const useGameState = () => useContext(StateContext)

export const useGameDispatch = () => {
    const context = useContext(DispatchContext);
        
    if(context === undefined) {
        throw new Error('useAppDispatch равен undefined')
    }
    
    return context;
}

export const ChessProvider: FC<{
    children: ReactNode;
}> = ({children}) => {

    const [gameState, dispatch] = useReducer(gameReducer, initialGameState)

    return (
        <StateContext.Provider value={gameState}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}
