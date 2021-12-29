import { connect } from "react-redux";
import { useParams } from "react-router-dom";

/**
 *
 * @param {id} props
 * @returns
 */
function Detail(props) {
  const id = useParams().id;

  const todo = props.toDos.find((todo) => todo.id === parseInt(id));
  console.log(todo.id);

  return (
    <div>
      <h1>{todo?.text}</h1>
      <h5>created at {todo?.id}</h5>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  // console.log(state);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
