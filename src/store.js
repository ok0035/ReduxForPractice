import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/**
 * store.js에 redux를 정의한다.
 * createStore + reducer
 * reducer에는 state 초기값과 action을 정의한다.
 */

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return { type: DELETE, id: parseInt(id) };
// };

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       //redux toolkit에서는 항상 type와 payload를 가지며 관용적으로 payload를 사용한다.
//       //createAction 함수를 통해 addToDo Action을 만들었지만, reducer의 action props로부터 payload를 불러올 수 있다.
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// ===============================================================================================

// const reducer = createReducer([], {
//   /**
//    * Toolkit에서는 mutate (원본을 수정하는 행위?)가 가능하다.
//    * 기본 redux에서는 불가능 -> 항상 새로운 object를 return해야함
//    */
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     const newState = state.filter((toDo) => toDo.id !== action.payload);
//     return newState;
//   },
// });

// ================================================================================================

const toDos = createSlice({
  name: "toDos Reducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { add, remove } = toDos.actions;

// const store = configureStore({ reducer });

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export default configureStore({ reducer: toDos.reducer });
