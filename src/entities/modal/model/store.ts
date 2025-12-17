import { create } from "zustand";
import { Modal } from "../type";

export const useModalStore = create<Modal>((set) => ({
    modalName: null,
    showModal: (name, state) => set({ modalName: name, state }),
    state: null,
    setState: (state) => set({ state }),
    updateState: (newState) =>
        set((store) => ({ state: { ...store.state, ...newState } })),
    closeModal: () => set({ modalName: null, state: null }),
}));
