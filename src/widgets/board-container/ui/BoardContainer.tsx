import { FC } from "react";
import { Board } from "@features/chess-board";

import styles from './BoardContainer.module.scss'

export const BoardContainer: FC = () => {
    return (
        <div 
            className={styles.container}
        >
            <Board/>
        </div>
    )
}