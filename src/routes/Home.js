import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

/**
 * ...rest -> 남은 파라미터를 알 수 있음
 */
function Home(props) {
  //   console.log(props);
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>

      <ul>
        {props.toDos.map((todo) => (
          <ToDo id={todo.id} key={todo.id} text={todo.text} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
