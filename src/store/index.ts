import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducer = combineReducers({});

const store = configureStore({ reducer });

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof reducer>;
export type StoreStateKey = keyof StoreState;
export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
export default store;
