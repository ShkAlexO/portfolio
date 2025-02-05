import {combineReducers, createStore} from 'redux';
import {sidebarVisibilityReducer, themeModeReducer} from "@/redux/reducers";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    sidebar: sidebarVisibilityReducer,
    theme: themeModeReducer,
});

export const store = createStore(rootReducer);

