import { all, fork } from "redux-saga/effects"

import LayoutSaga from "./layout/saga"
import usersSaga from "./users/saga"

export default function* rootSaga() {
  yield all([
    fork(LayoutSaga),
    fork(usersSaga)
  ])
}
