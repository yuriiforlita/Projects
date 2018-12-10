import idGenerator from "react-id-generator";
export const doneTask = (idOfTask, idUser) => ({
  type: "DONE_TASK",
  idOfTask,
  idUser
});
export const onChangeTask = text => ({
  type: "ONCHANGE_TASK",
  text
});
export const onChangeUser = user => ({
  type: "ONCHANGE_USER",
  user
});
export const addName = text => {
  return { type: "ADD_USER", id: idGenerator(), text };
};
export const currentTab = task => ({
  type: "CURRENT_TAB",
  task
});
export const addNewTask = (task, hour, minutes, seconds) => ({
  type: "ADD_TASK",
  task,
  time: `${hour}:${minutes}:${seconds}`,
  id: idGenerator()
});

export const openModal = findTaskId => ({
  type: "OPEN_MODAL",
  findTaskId
});
