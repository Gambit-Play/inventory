import { createSelector } from 'reselect';

const selectUsers = state => state.users;

// Selects user.currentUser from the state
export const selectCurrentUser = createSelector(
	[selectUsers],
	users => users.currentUser
);

// Selects user.allUsers from the state
export const selectAllUsers = createSelector(
	[selectUsers],
	users => users.allUsers
);
