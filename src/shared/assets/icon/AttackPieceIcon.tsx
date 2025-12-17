import { FC } from "react";

export const AttackPieceIcon: FC<{
    width?: number | string;
    height?: number | string;
}> = ({width, height}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width={width} height={height} fill="none">
            <path
                id="Subtract" 
                d="M83 37C83 11.5949 62.4051 -9 37 -9C11.5949 -9 -9 11.5949 -9 37C-9 62.4051 11.5949 83 37 83C62.4051 83 83 62.4051 83 37ZM69 37C69 19.3269 54.6731 5 37 5C19.3269 5 5 19.3269 5 37C5 54.6731 19.3269 69 37 69C54.6731 69 69 54.6731 69 37Z"
                fill="currentColor"
                fillRule="evenodd"/>
        </svg>
    )
}