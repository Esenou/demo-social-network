import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {

    getState() {
        return this._state;
    },
    _state: {

        profilePage: {
            post: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 }
            ],
            newPostText: "Hello Esen",

        },

        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Andrey' },
                { id: 4, name: 'Aman' },
                { id: 5, name: 'Esen' },
                { id: 6, name: 'Adilet' }
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'yooo' },
                { id: 4, message: 'yooo' },
                { id: 5, message: 'yooo' }
            ],
            newMessageBody:""
        }

    },
    _callSubscriber() {
        console.log("sdfds");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
        
    }



}



export default store;
window.store = store;