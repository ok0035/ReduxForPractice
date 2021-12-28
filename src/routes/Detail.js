import { connect } from "react-redux";

/**
 *
 * @param {id} props
 * @returns
 */
function Detail(props) {
  return <div>이곳은 디테일 페이지 입니다.</div>;
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  console.log(ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
