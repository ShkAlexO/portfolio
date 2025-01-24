import {combineReducers, createStore} from 'redux';
import {sidebarReducer} from "@/redux/reducers.ts";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
});

export const store = createStore(rootReducer);

