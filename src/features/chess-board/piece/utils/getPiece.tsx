import { Piece, PieceType, Color } from "@shared/types/chess";
import { BishopPieceIcon, KingPieceIcon, KnightPieceIcon, PawnPieceIcon, QueenPieceIcon, RookPieceIcon } from "@shared/assets/piece";

export const getPiece = (piece: Piece, width = 75, height = 75) => {
    const whitePiece = {
        [PieceType.KING]: <KingPieceIcon width={width} height={height} color={Color.WHITE}/>,
        [PieceType.QUEEN]: <QueenPieceIcon width={width} height={height} color={Color.WHITE}/>,
        [PieceType.ROOK]: <RookPieceIcon width={width} height={height} color={Color.WHITE}/>,
        [PieceType.BISHOP]: <BishopPieceIcon width={width} height={height} color={Color.WHITE}/>,
        [PieceType.KNIGHT]: <KnightPieceIcon width={width} height={height} color={Color.WHITE}/>,
        [PieceType.PAWN]: <PawnPieceIcon width={width} height={height} color={Color.WHITE}/>,
    }

    const blackPiece = {
        [PieceType.KING]: <KingPieceIcon width={width} height={height} color={Color.BLACK}/>,
        [PieceType.QUEEN]: <QueenPieceIcon width={width} height={height} color={Color.BLACK}/>,
        [PieceType.ROOK]: <RookPieceIcon width={width} height={height} color={Color.BLACK}/>,
        [PieceType.BISHOP]: <BishopPieceIcon width={width} height={height} color={Color.BLACK}/>,
        [PieceType.KNIGHT]: <KnightPieceIcon width={width} height={height} color={Color.BLACK}/>,
        [PieceType.PAWN]: <PawnPieceIcon width={width} height={height} color={Color.BLACK}/>,
    }

    return piece.color === Color.WHITE
        ? whitePiece[piece.type]
        : blackPiece[piece.type]
}