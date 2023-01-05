import { defineStore } from "pinia";

const useSessionStore = defineStore({
    id: "session",
    state: () => ({
        NavBar: false
    }),
    getters: {
        NavBarState: (state) => state.NavBar,
    },
    actions: {
        SetNavBarState(newState) {
            return this.NavBar = newState;
        }
    }
});

export default useSessionStore;