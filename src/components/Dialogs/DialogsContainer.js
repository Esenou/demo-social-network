
import React from 'react'
import {  sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



// const DialogsContainer = (props) => {



//   return (

//     <StoreContext.Consumer>
//        {
//       (store) => {
//         let state = store.getState().dialogsPage;

//         let onSendMessage = () => {
//           store.dispatch(sendMessageCreator());
//         }
//         let onChangeNewMessage = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));

//         }
//         return (
//           <Dialogs
//             sendMessage={onSendMessage}
//             updateNewMessageBody={onChangeNewMessage}
//             state={state}
//           />
//         )
//       }
//     }

//     </StoreContext.Consumer>

//   );

// }

// class DialogsContainer extends React.Component {

//   componentDidMount() {

//   }
//   render() {
//     return <Dialogs/>
//   }
// }
let mapStateToProps = (state) => {
  return {

    dialogsPages: state.dialogsPage,

  }
}
let mapDispatchToProps = (dispatch) => {

  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
   
  }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;

