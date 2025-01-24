const initialState = {
    isOpen: false,
};

export const sidebarReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return { ...state, isOpen: !state.isOpen };
        default:
            return state;
    }
};

