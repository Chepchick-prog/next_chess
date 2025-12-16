import { create } from "zustand";

interface Modal {
    modalName: string | null;
    showModal: (name: string | null, state?: any) => void;
    state: any;
    setState: (state: any) => void;
    updateState: (state: any) => void;
    closeModal: () => void;
}

export const useModalStore = create<Modal>((set) => ({
    modalName: null,
    showModal: (name, state) => set({ modalName: name, state }),
    state: null,
    setState: (state) => set({ state }),
    updateState: (newState) =>
        set((store) => ({ state: { ...store.state, ...newState } })),
    closeModal: () => set({ modalName: null, state: null }),
}));
