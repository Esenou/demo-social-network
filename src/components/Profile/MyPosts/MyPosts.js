
import React, { Component } from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

const length = maxLengthCreator(10);
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, length]} component={Textarea}
          value={props.newPostText} name={"addNewPostBody"} />
      </div>

      <div> <button> Add post</button></div>
    </form>
  )
}
const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddNewPostForm)
const MyPosts = React.memo(props => {

  let postElements = [...props.posts]
    .reverse()
    .map(post => <Post message={post.message} likesCount={post.likesCount} />);


  const addNewPost = (post) => {
    props.addPost(post.addNewPostBody)
    console.log(post.addNewPostBody);
  }


  return (


    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostReduxForm onSubmit={addNewPost} />
      </div>

      <div className={s.posts}>
        {postElements}
      </div>


    </div>

  );
})
export default MyPosts
