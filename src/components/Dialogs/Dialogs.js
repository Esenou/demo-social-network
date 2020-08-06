
import React from 'react'
import s from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validator';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength15 = maxLengthCreator(15);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field  validate={[required,maxLength15]}  component={Textarea}  placeholder="Enter your message" name="newMessageBody"  />

      </div >
      <div>
        <button>send</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)



const Dialogs = (props) => {



  let dialogElements = props.dialogsPages.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.dialogsPages.messagesData.map(m => <Message message={m.message} />);
  



  const addNewMessage = (fromData) => {
    
    console.log(fromData)
    props.sendMessage(fromData.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
          </div>
        </div>


      </div>
    </div >
  );

}
export default Dialogs
