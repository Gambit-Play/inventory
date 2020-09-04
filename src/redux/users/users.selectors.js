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

// Selects user.displayName from the state
export const selectDisplayName = createSelector(
	[selectUsersStore],
	users => users.displayName
);

// Selects user.email from the state
export const selectEmail = createSelector(
	[selectUsersStore],
	users => users.email
);

// Selects user.password from the state
export const selectPassword = createSelector(
	[selectUsersStore],
	users => users.password
);

// Selects user.confirmPassword from the state
export const selectConfirmPassword = createSelector(
	[selectUsersStore],
	users => users.confirmPassword
);
