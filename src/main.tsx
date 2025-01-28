import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './App'
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "@/redux/store";

const store = createStore(rootReducer);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
