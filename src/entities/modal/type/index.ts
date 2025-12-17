export interface Modal {
    modalName: string | null;
    showModal: (name: string | null, state?: any) => void;
    state: any;
    setState: (state: any) => void;
    updateState: (state: any) => void;
    closeModal: () => void;
}