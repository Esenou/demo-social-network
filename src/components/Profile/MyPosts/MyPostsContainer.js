
import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import store from '../../../redux/redux-store';
import { connect } from 'react-redux';



// const MyPostsContainer = (props) => {



//   return (
//     <StoreContext.Consumer>{
//       (store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }
//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         }
//         return (
//           <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//             posts={state.profilePage.post}
//             newPostText={state.profilePage.newPostText} />
//         )
//       }
//     }
//     </StoreContext.Consumer>


//   );
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.post,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost:  (addNewPostBody) => {
      dispatch(addPostActionCreator(addNewPostBody));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer
