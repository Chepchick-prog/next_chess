'use client'

import React, { useEffect, useMemo } from 'react';
import { useModalStore } from '../model/store';

import styles from './ModalProvider.module.scss'
import { createPortal } from 'react-dom';
import { contentFromModalName } from '../model/constants';

export const ModalProvider: React.FC = () => {
    const { modalName, state } = useModalStore();
    
    const content = useMemo(() => {
        if (!modalName) {
            return null;
        }

        return contentFromModalName[
            modalName as keyof typeof contentFromModalName
        ];
    }, [modalName]);

    useEffect(() => {
        if (content) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }
    }, [content]);

    if (!content) {
        return null;
    }

    if(typeof window === 'object') {
        return createPortal(
            <div className={styles.modal}>
                {content}
            </div>,  document.body,
        )
    }

    return null
};
