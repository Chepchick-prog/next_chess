import { FC } from "react"
import { Color, PieceType } from "../../../../type/chess"
import { useModalStore } from "../../model/store"

import './PromoteModal.css'
import { useGameDispatch } from "../../../../context/ChessContext"

export const PromoteModal: FC = () => {
    const { state, closeModal } = useModalStore();
    const dispatch = useGameDispatch()

    const color = state?.color === Color.WHITE ? "w" : "b";
    const promoteList = [
        PieceType.QUEEN,
        PieceType.ROOK,
        PieceType.BISHOP,
        PieceType.KNIGHT,
    ]

    const handlePromote = (promotion: PieceType) => {
        dispatch({
            type: 'PROMOTE_PAWN',
            payload: {
                selectedPiece: state,
                promotion,
            }
        })
        closeModal()
    }

    return (
        <div className='promote-modal'>
            <h2>Selected piece</h2>
            <div className='promote-modal-buttons'>
                {promoteList.map(pieceType => (
                    <button 
                        onClick={() => handlePromote(pieceType)}
                        className="promote-modal-button"
                        key={pieceType}
                    >
                        <img src={`./img/piece/${PieceType[pieceType].toLocaleLowerCase()}-${color}.png`} alt="piece." />
                    </button>
                ))}
            </div>
        </div>
    )
}