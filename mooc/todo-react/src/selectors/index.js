import { createSelector } from 'reselect'
export const getText = (state) => state.get('text')

export const getFilter = (state) => state.get('filter')

const getTodos = state => state.todos.data

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (toods, filter) => {
    switch (filter) {
      case "all":
        return toods;
      case "completed":
        return toods.filter(t => t.get('completed'));
      case "active":
        return toods.filter(t => !t.get('completed'));
      default:
        return new Error("Unkonw filter: " + filter);
    }
  }
)