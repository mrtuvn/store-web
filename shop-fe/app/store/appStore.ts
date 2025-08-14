import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type AppStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const useStore = create<AppStore>()(
    (set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
    })
)
