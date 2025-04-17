import { create } from 'zustand';

export const useOpenCreateEventModal = create((set) => ({
    isOpenCreateEventModal: false,
    openCreateEventModal: () => set({isOpenCreateEventModal: true}),
    closeCreateEventModal: () => set({isOpenCreateEventModal: false}),
}));