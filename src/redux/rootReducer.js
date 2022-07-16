import { combineReducers } from "redux";
import { persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import passwordReducer from "./reducers/passwordReducer";

import userReducer from "./reducers/userReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userD", "userPass"]
}

const rootReducer = combineReducers({
    userD: userReducer,
    userPass: passwordReducer
});

export default persistReducer(persistConfig, rootReducer)