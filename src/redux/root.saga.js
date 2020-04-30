import { all, call } from 'redux-saga/effects';

// import { usersSagas } from './users/users.sagas';

export default function* rootSaga() {
	yield all([call(/* usersSagas */)]);
}
