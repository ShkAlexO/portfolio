import {createRoot} from "react-dom/client";
import "./index.css";

import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "@/redux/store";
import {App} from "@/App";

const store = createStore(rootReducer);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
