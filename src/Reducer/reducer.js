const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error(
        `Acción no reconocida, se esperaba "INCREMENT" o "DECREMENT", pero se recibio ${action.type}`
      );
  }
};


export default reducer