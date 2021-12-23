// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*Vanila Redux */

import { createStore } from "redux";

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id: id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      const newArr = state.filter((toDo) => toDo.id !== action.id);
      // state.forEach((toDo) => {
      //   console.log(toDo.id + " " + action.id);
      //   if (String(toDo.id) !== String(action.id)) newArr.push(toDo);
      // });
      // console.log(newArr);
      return newArr;
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchedAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchedDeleteToDo = (e) => {
  console.dir(e.target.parentNode.id);
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerText = toDo.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", dispatchedDeleteToDo);
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  console.dir(e.target);
  const toDo = input.value;
  dispatchedAddToDo(toDo, Date.now());

  input.value = "";
};

// input.addEventListener("submit", onSubmit);
form.addEventListener("submit", onSubmit);
