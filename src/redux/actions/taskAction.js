import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./index";

//actions

//ADD_TASK
export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title: title,
    },
  };
}

//TOGGLE_TASK
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

//DELETE_TASK
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});
