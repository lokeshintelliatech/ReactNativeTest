import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import {applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Cat'],
};

const rootReducer = combineReducers({
  reducer: persistReducer(persistConfig, reducer),
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
