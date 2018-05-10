export const ACTIONS = {
  FETCH_TITLE: 'FETCH_TITLE',
  SET_HELMET: 'SET_HELMET',
};

const initialState = {
  appName: 'Julien',
  title: 'Home',
  description: 'description',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case ACTIONS.SET_HELMET:
      return {
        ...state,
        title: action.title,
        description: action.description,
      };
    default:
      return { ...state };
  }
};

export const setHelmet = (title, description) => ({
  type: ACTIONS.SET_HELMET,
  title,
  description,
});
export const setTitle = () => ({
  type: ACTIONS.FETCH_TITLE,
});
export const fetchTitle = () => (dispatch, getState, api) => {
};
