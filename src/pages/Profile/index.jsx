
import { connect } from "react-redux";
import { addNumAction, subNumAction } from "../../store/counter";

function Profile({ num, add, sub }) {
  return (
    <>
      <h2>profile</h2>
      COUNTER: {num}
      <button
        onClick={() => {
          add(1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          sub(1);
        }}
      >
        -
      </button>
    </>
  );
}

function mapStateToProps({counter: {num} }) {
  return { num };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (num) => dispatch(addNumAction(num)),
    sub: (num) => dispatch(subNumAction(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
