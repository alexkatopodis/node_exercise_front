import { all, fork } from "redux-saga/effects"
import messagesSaga from "./messages/saga"
import usersSaga from "./users/saga"

export default function* rootSaga() {
  yield all([
    fork(usersSaga),
    fork(messagesSaga)
  ])
}
