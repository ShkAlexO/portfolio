const initialSidebarState = {
    isOpen: false,
};

export const sidebarVisibilityReducer = (state = initialSidebarState, action: { type: string }) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR_VISIBILITY':
            return {...state, isOpen: !state.isOpen};
        default:
            return state;
    }
};

const initialThemeState = {
    themeMode: "light",
};

export const themeModeReducer = (state = initialThemeState, action: { type: string }) => {
    switch (action.type) {
        case 'TOGGLE_THEME_MODE':
            return {...state, themeMode: state.themeMode === "light" ? "dark" : "light"};
        default:
            return state;
    }
};