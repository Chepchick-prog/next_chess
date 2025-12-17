import { FC } from "react";

export const MovePieceIcon: FC<{
    width?: number | string;
    height?: number | string;
}> = ({width, height}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width={width} height={height} fill="none">
            <circle id="Oval 1" cx="37" cy="37" r="10" fill="currentColor"/>
        </svg>
    )
}