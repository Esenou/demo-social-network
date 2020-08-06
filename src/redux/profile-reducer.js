import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    post: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 }
    ],
    profile: null,
    status: ""

};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.addNewPostBody,
                likesCount: 0
            };

            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            };
        }

        case SET_USER_PROFILE: {

            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {

            return { ...state, status: action.status };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (addNewPostBody) => ({ type: ADD_POST, addNewPostBody })

export const setUserProfile = (profile) => (

    { type: SET_USER_PROFILE, profile }

)

export const setStatus = (status) => ({ type: SET_STATUS, status })



export const userProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));


}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        console.log(response.data.data);

        // response.data = "fdfsdfesen"
        dispatch(setStatus(status));
    }


}

export default profileReducer;