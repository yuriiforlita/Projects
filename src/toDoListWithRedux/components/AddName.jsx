import React from "react";
import { addName } from "../actions";
import { onChangeUser } from "../actions";
import { connect } from "react-redux";
import "./style.css";

const AddName = ({
  dispatch,
  tasksPerUser,
  allTasksPerUser,
  doneTasksPerUser,
  allState
}) => {
  return (
    <div className="addNameWrapper">
      <div className="input-group mb-3 container secondWrapper">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Name..."
          maxLength="14"
          required
          name="name"
          value={allState}
          onChange={event => {
            dispatch(onChangeUser(event.target.value));
          }}
        />
        <div className="input-group-append">
          <button
            className={
              allState.length === 0
                ? "cursosChange  btn btn-danger"
                : " btn btn-outline-secondary"
            }
            type="button"
            onClick={e => {
              e.preventDefault();
              dispatch(addName(allState));
            }}
            data-title="Write name please..."
          >
            {allState.length === 0 ? "" : "+"}
          </button>
        </div>
      </div>
      <h4 className="text-center text-white pb-1 ">
        Current user {tasksPerUser.name}
      </h4>
      <div className="text-center">
        <span className="activeTasks">
          <p>{allTasksPerUser}</p>
          <p className="text-danger">Active</p>
        </span>
        <span className="doneTasks">
          <p>{doneTasksPerUser}</p>
          <p className="text-success">Done</p>
        </span>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return { allState: state.todos.userValue };
}

export default connect(mapStateToProps)(AddName);
