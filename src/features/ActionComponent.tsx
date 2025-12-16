import { useGameState, useGameDispatch } from "@provider";
import { Color } from "@shared/types/chess";
import { FC } from "react";

interface ActionComponentProps {
    children: React.ReactNode
}

export const ActionComponent: FC<ActionComponentProps> = ({children}) => {

    const gameState = useGameState()

    const dispatch = useGameDispatch()

    function handleRotateBoard () {
        return dispatch({
            type: 'ROTATE_BOARD'
        })
    }
        
    return (
        <div className="chess">
            <div className="vertical">
                <div className="game-info">
                    <h5>Current player: {Color[gameState.currentPlayer]}</h5>
                    <div>
                        <h4>Game state: {gameState.status}</h4>
                        {gameState.status === 'checkmate' &&
                            <h4>Winner: {gameState.currentPlayer}</h4>
                        }
                        
                    </div>
                    <button onClick={ () => handleRotateBoard() }>Перевернуть доску</button>
                </div>
                <div className="horizontal">
                    {children}
                    {/* <div className="history-move">
                        <h5>History Move</h5>
                        <div className="list-move">
                            {gameState.moveHistory.map((move, index) => (
                                <h4 key={index} className="list-item">{`${index + 1}. ${8 - move.to.row}${Col[move.to.col]}`}</h4>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}