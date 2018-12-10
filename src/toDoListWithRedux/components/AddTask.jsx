import React from "react";
import { addNewTask } from "../actions";
import { onChangeTask } from "../actions";
import { connect } from "react-redux";
import Winner from "./Winner";

const AddTask = ({ dispatch, getWinnerUsers, allState }) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return (
    <div className="input-group mb-3 container text-center">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Add task..."
        maxLength="100"
        onChange={event => {
          dispatch(onChangeTask(event.target.value));
        }}
        value={allState}
        required
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
            dispatch(addNewTask(allState, hours, minutes, seconds));
          }}
          data-title="Write task please..."
        >
          {allState.length === 0 ? "" : "+"}
        </button>
      </div>
      <Winner getWinnerUsers={getWinnerUsers} />
    </div>
  );
};
function mapStateToProps(state) {
  return { allState: state.todos.taskValue };
}

export default connect(mapStateToProps)(AddTask);
