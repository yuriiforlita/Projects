export const tasksPerUser = state => {
  const currentUser = state.todos.users.find(
    user => user.id === state.todos.currentTabId
  );

  return currentUser;
};
export const allTasksPerUser = user => {
  const doneTasks = user.tasks.filter(user => user.crossed !== true);
  return doneTasks.length;
};
export const doneTasksPerUser = user => {
  const filteredDoneTasks = user.tasks.filter(task => task.crossed === true);
  return filteredDoneTasks.length;
};
export const sortedUsersPerDoneTask = state => {
  const newUsers = [];
  state.todos.users.forEach(user => newUsers.push(user));
  if (newUsers.length > 1) {
    const sortUsers = newUsers.sort((a, b) => b.doneTasks - a.doneTasks);
    return sortUsers;
  }
  return newUsers;
};
export const getWinnerUsers = usersSorted => {
  if (typeof usersSorted === "undefined") {
    return [];
  } else if (usersSorted.length === 1) {
    return usersSorted;
  } else if (usersSorted.length > 1) {
    let usersWinner = usersSorted.filter(
      user => usersSorted[0].doneTasks === user.doneTasks
    );
    return usersWinner;
  }
};
