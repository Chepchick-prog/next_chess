'use client'

import { FC } from "react"
import { PieceType } from "@shared/types/chess"
import { useModalStore } from "../../model/store"
import { useGameDispatch } from "@provider"
import { BishopPieceIcon, KnightPieceIcon, QueenPieceIcon, RookPieceIcon } from "@shared/assets/piece"

import styles from './Promote.module.scss'

export const Promote: FC = () => {
    const dispatch = useGameDispatch()
    const { state, closeModal } = useModalStore();

    const promoteList = [
        PieceType.QUEEN,
        PieceType.ROOK,
        PieceType.BISHOP,
        PieceType.KNIGHT,
    ]

    const pieceList: any = {
        [PieceType.QUEEN]: <QueenPieceIcon width={'100%'} height={'100%'} color={state?.color}/>,
        [PieceType.ROOK]: <RookPieceIcon width={'100%'} height={'100%'} color={state?.color}/>,
        [PieceType.BISHOP]: <BishopPieceIcon width={'100%'} height={'100%'} color={state?.color}/>,
        [PieceType.KNIGHT]: <KnightPieceIcon width={'100%'} height={'100%'} color={state?.color}/>,
    }

    const handlePromote = (promotion: PieceType) => {
        dispatch({
            type: 'PROMOTE_PAWN',
            payload: {
                selectedPiece: {...state}!,
                promotion,
            }
        })
        closeModal()
    }

    return (
        <div className={styles.promote}>
            {promoteList.map((pieceType: PieceType) => (
                <button 
                    onClick={() => handlePromote(pieceType)}
                    className={styles.promote_button}
                    key={pieceType}
                >
                    {pieceList[pieceType]}
                </button>
            ))}
        </div>
    )
}