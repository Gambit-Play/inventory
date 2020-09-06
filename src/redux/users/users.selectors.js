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

// Selects user.errorDisplayName from the state
export const selectErrorDisplayName = createSelector(
	[selectUsersStore],
	users => users.errorDisplayName
);

// Selects user.errorEmail from the state
export const selectErrorEmail = createSelector(
	[selectUsersStore],
	users => users.errorEmail
);

// Selects user.errorPassword from the state
export const selectErrorPassword = createSelector(
	[selectUsersStore],
	users => users.errorPassword
);

// Selects user.errorConfirmPassword from the state
export const selectErrorConfirmPassword = createSelector(
	[selectUsersStore],
	users => users.errorConfirmPassword
);

// Selects user.isNewUser from the state
export const selectIsNewUser = createSelector(
	[selectUsersStore],
	users => users.isNewUser
);
