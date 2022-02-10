import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import {
  updateProfile,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

//actions
const LIKE = "LIKE";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

//action creators
const like = createAction(LIKE, (post_id) => ({ post_id }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
  is_check: false,
};
//middleware actions
// const likeFB = (post_id, user) => {
//     return function (dispatch, geState, { history }) {
//       setPersistence(auth, browserSessionPersistence)
//         .then((res) => {
//           signInWithEmailAndPassword(auth, id, pwd)
//             .then((userCredential) => {
//               // Signed in
//               const user = userCredential.user;
//               console.log(user, "여기 값이야?");

//               dispatch(
//                 setUser({
//                   user_name: user.displayName,
//                   id: id,
//                   user_profile: "",
//                   uid: user.uid,
//                 })
//               );

//               history.push("/");
//             })
//             .catch((error) => {
//               const errorCode = error.code;
//               const errorMessage = error.message;

//               console.log(errorCode, errorMessage);
//             });
//         })
//         .catch((error) => {
//           // Handle Errors here.
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.log(errorCode, errorMessage);
//         });
//     };
//   };

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  like,
};

export { actionCreators };
