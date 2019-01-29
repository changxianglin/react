export const getText = (state) => state.get('text')

export const getFilter = (state) => state.get('filter')

export const getVisibleTodos = (state) => {
    const data = state.getIn(['todos', 'data'])
    const filter = state.get('filter')
    switch (filter) {
      case "all":
        return data;
      case "completed":
        return data.filter(t => t.get('completed'));
      case "active":
        return data.filter(t => !t.get('completed'));
      default:
        return new Error("Unkonw filter: " + filter);
    }
  };