import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../asserts/images/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, ...props }) => {
    let u = user;
    return<div>
        <span>
            <div className={s.item}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : userPhoto} />
                </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unfollow(u.id);
                    }}> UnFollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id);


                    }}> Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
        </span>

    </div>
    
}

export default User