import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "@/redux/store.ts";

const store = createStore(rootReducer);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
