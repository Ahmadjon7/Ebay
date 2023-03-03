import { createStore } from 'redux';
import { persistStore , persistReducer } from 'redux-persist'
import rootReducer from '../reducer/rootReducer';
import storage from 'redux-persist/lib/storage';


const persisConfig = {
    key:"reducer",
    storage: storage,
    addcart :['cartReducer']
}
const presistedReducer = persistReducer(persisConfig , rootReducer)

const store = createStore(presistedReducer);

const persistor = persistStore(store)


export { store , persistor }
