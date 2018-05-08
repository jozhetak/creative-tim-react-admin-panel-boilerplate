import database from '../../../secret/firebase';

import {
  ADD_ADMIN_CATEGORY,
  REMOVE_ADMIN_CATEGORY,
  EDIT_ADMIN_CATEGORY,
  SET_ADMIN_CATEGORY
} from '../../constant/constant';

export const addCategory = newCategoryInfo => ({
  type: ADD_ADMIN_CATEGORY,
  newCategory: newCategoryInfo
});

export const startAddAdminCategory = newCategoryInfo => {
  return (dispatch, getState) => {
    return database
      .ref(`category`)
      .push(newCategoryInfo)
      .then(ref => {
        dispatch(addCategory({ id: ref.key, ...newCategoryInfo }));
      });
  };
};
