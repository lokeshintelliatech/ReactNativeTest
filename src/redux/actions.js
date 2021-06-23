
export const addCat = cat => dispatch => {
    dispatch({
      type: addCat,
      payload: cat
    });
  };
  
  export const removeCat = cat => dispatch => {
    dispatch({
      type: removeCat,
      payload: cat
    });
  };

  export const updatCat = cat => dispatch => {
    dispatch({
      type: updatCat,
      payload: cat
    });
  };