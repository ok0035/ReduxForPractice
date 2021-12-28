import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

/**
 *
 * @param {text, onBtnClick, id} props
 * @returns
 */
function ToDo(props) {
  return (
    <li id={props.id}>
      <Link to={`/${props.id}`}>
        {props.text} <button onClick={props.onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
