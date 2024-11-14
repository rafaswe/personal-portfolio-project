import { create } from "zustand";

type Store = {
  isTerminalClicked: boolean;
  toggleTerminal: () => void;
};

const useTerminalStore = create<Store>()((set) => ({
  isTerminalClicked: false,
  toggleTerminal: () =>
    set((state) => ({
      isTerminalClicked: !state.isTerminalClicked,
    })),
}));

export default useTerminalStore;
