import {
  ADD_ELEMENT,
  CLEAR_ELEMENTS,
  EDIT_ELEMENT,
  DELETE_ELEMENT,
  LOAD_ELEMENTS,
} from './actions';

function elements(state = [], action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return [
        ...state,
        {
          ...action.element,
          data: {
            ...action.element.data,
          },
        },
      ];
    case EDIT_ELEMENT:
      return state.map(
        element =>
          element.pk === action.element.pk
            ? {
                ...action.element,
                data: {
                  ...action.element.data,
                },
              }
            : element,
      );
    case DELETE_ELEMENT:
      return state.filter(item => item.pk !== action.pk);
    case CLEAR_ELEMENTS:
      return [];
    case LOAD_ELEMENTS:
      return action.items;
    default:
      return state;
  }
}

export default elements;
