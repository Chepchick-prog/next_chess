import { FC, useMemo } from 'react';
import { useModalStore } from '../model/store';
import { contentFromModalName } from '../model/constants';

import './ModalProvider.css'

export const ModalProvider: FC = () => {
    const { modalName } = useModalStore();

    const content = useMemo(() => {
        if (!modalName) {
            return null;
        }

        return contentFromModalName[
            modalName as keyof typeof contentFromModalName
        ];
    }, [modalName]);

    return (
        <div className='modal'>
            {content}
        </div>
    );
};
