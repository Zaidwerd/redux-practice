const todos  = (state = [], action) => {
  switch(action.type) {
    case 'add':
    return [
      ...state,
      {
        id: action.id,
        text: action.text
      }
    ]
    default:
    return state
  }
};

export default todos;
