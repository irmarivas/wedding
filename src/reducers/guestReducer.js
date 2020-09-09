import { SET_CONFIRMED_GUESTS } from './actions';

const guestReducer = (guests = [], action) => {
  switch (action.type) {
    case SET_CONFIRMED_GUESTS:
      guests = JSON.parse(JSON.stringify(action.payload));
      return guests;
    default:
      return guests;
  }
}

export { guestReducer };
