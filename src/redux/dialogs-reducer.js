
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   
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
        ]
    
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
 
        case SEND_MESSAGE:
            let body = action.newMessageBody;
         
            state.messagesData.push({ id: 6, message: body });
            return {...state};
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody }) 



export default dialogsReducer;