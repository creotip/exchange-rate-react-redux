import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import authReducer from '../redux/reducers/auth'
import generalReducer from '../redux/reducers/general'
import { composeWithDevTools } from 'redux-devtools-extension'

const authPersistConfig = {
  key: 'auth',
  storage,
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  general: generalReducer,
})

composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const persistor = persistStore(store)

export { persistor, store }
