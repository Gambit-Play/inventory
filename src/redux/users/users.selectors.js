import { createSelector } from 'reselect';

const selectUsersStore = state => state.users;

// Selects user.currentUser from the state
export const selectCurrentUser = createSelector(
	[selectUsersStore],
	users => users.currentUser
);

// Selects user.allUsers from the state
export const selectAllUsers = createSelector(
	[selectUsersStore],
	users => users.allUsers
);
