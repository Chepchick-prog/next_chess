import { FC } from "react";

import styles from './NavigationContainer.module.scss'

export const NavigationContainer: FC = () => {
    return (
        <div className={styles.container}>
            <span className={styles.logo_txt}>NextChess</span>
        </div>
    )
}