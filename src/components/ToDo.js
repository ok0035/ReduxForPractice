import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

/**
 *
 * @param {text, onBtnClick, id} props
 * @returns
 */
function ToDo(props) {
  return (
    <li id={props.id}>
      <Link to={`/${props.id}`}>{props.text}</Link>
      <button onClick={props.onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
