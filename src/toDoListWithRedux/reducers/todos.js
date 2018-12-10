const todos = (
  state = {
    users: [
      {
        name: "igor",
        id: 0,
        doneTasks: 0,
        tasks: [
          { idUser: 0, task: "Do It", crossed: false, id: 0, time: `14:32:23` }
        ]
      }
    ],
    currentTabId: 0,
    taskValue: "",
    userValue: "",
    openModal: false,
    findTaskId: 0
  },
  action
) => {
  switch (action.type) {
    case "ONCHANGE_TASK":
      return { ...state, taskValue: action.text };
    case "ONCHANGE_USER":
      return { ...state, userValue: action.user };
    case "ADD_USER":
      if (action.text === undefined || action.text === "") {
        return state;
      }
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.id,
            name: action.text,
            tasks: [],
            doneTasks: 0
          }
        ],
        userValue: ""
      };
    case "CURRENT_TAB":
      return { ...state, currentTabId: action.task };
    case "ADD_TASK":
      if (action.task === undefined || action.task === "") {
        return state;
      }
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === state.currentTabId) {
            return {
              ...user,
              tasks: [
                ...user.tasks,
                {
                  idUser: state.currentTabId,
                  task: action.task,
                  crossed: false,
                  id: action.id,
                  time: action.time
                }
              ]
            };
          } else {
            return user;
          }
        }),
        taskValue: ""
      };
    case "DONE_TASK":
      return {
        ...state,
        users: state.users.map(user => {
          if (action.idUser === user.id) {
            user.tasks = user.tasks.map(task => {
              if (action.idOfTask === task.id) {
                const currentCrossed = !task.crossed;
                user.doneTasks = currentCrossed
                  ? user.doneTasks + 1
                  : user.doneTasks - 1;

                return {
                  ...task,
                  crossed: currentCrossed
                };
              } else {
                return task;
              }
            });
          }
          return user;
        })
      };
    // case "OPEN_MODAL":
    //   return {
    //     ...state,
    //     openModal: !state.openModal,
    //     findTaskId: action.findTaskId
    //   };
    default:
      return state;
  }
};
export default todos;
