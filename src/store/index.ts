import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import context from 'Context';

const logger = createLogger({ collapsed: true });
const reducer = combineReducers({});

const store = configureStore({
    reducer,
    middleware: (getMiddleware) =>
        getMiddleware({ thunk: { extraArgument: context }, serializableCheck: false }).concat(logger),
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof reducer>;
export type StoreStateKey = keyof StoreState;
export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
export default store;
