import { Piece, PieceType, Color } from "@shared/types/chess";
import { BishopPieceIcon, KingPieceIcon, KnightPieceIcon, PawnPieceIcon, QueenPieceIcon, RookPieceIcon } from "@shared/assets/piece";

export const getPiece = (piece: Piece) => {
    const whitePiece = {
        [PieceType.KING]: <KingPieceIcon width={'100%'} height={'100%'} color={Color.WHITE}/>,
        [PieceType.QUEEN]: <QueenPieceIcon width={'100%'} height={'100%'} color={Color.WHITE}/>,
        [PieceType.ROOK]: <RookPieceIcon width={'100%'} height={'100%'} color={Color.WHITE}/>,
        [PieceType.BISHOP]: <BishopPieceIcon width={'100%'} height={'100%'} color={Color.WHITE}/>,
        [PieceType.KNIGHT]: <KnightPieceIcon width={'100%'} height={'100%'} color={Color.WHITE}/>,
        [PieceType.PAWN]: <PawnPieceIcon width={'100%'} height={'100%'} color={Color.WHITE}/>,
    }

    const blackPiece = {
        [PieceType.KING]: <KingPieceIcon width={'100%'} height={'100%'} color={Color.BLACK}/>,
        [PieceType.QUEEN]: <QueenPieceIcon width={'100%'} height={'100%'} color={Color.BLACK}/>,
        [PieceType.ROOK]: <RookPieceIcon width={'100%'} height={'100%'} color={Color.BLACK}/>,
        [PieceType.BISHOP]: <BishopPieceIcon width={'100%'} height={'100%'} color={Color.BLACK}/>,
        [PieceType.KNIGHT]: <KnightPieceIcon width={'100%'} height={'100%'} color={Color.BLACK}/>,
        [PieceType.PAWN]: <PawnPieceIcon width={'100%'} height={'100%'} color={Color.BLACK}/>,
    }

    return piece.color === Color.WHITE
        ? whitePiece[piece.type]
        : blackPiece[piece.type]
}