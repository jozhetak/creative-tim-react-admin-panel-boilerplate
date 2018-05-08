import {
  ADD_ADMIN_CATEGORY,
  REMOVE_ADMIN_CATEGORY,
  EDIT_ADMIN_CATEGORY,
  SET_ADMIN_CATEGORY
} from '../../constant/constant';

const adminProductCategoryDefaultReducer = [];

export default (state = adminProductCategoryDefaultReducer, action) => {
  switch (action.type) {
    case ADD_ADMIN_CATEGORY:
      return [...state, action.newCategory];
    default:
      return state;
  }
};
