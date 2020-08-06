import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../asserts/images/user.png';
import { NavLink } from 'react-router-dom';
import *as axios from 'axios';
import { usersAPI } from '../../api/api';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
let Users = ({ currentPage, totalUserCount, onPageChanged, pageSize, ...props }) => {



    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUserCount={totalUserCount} pageSize={pageSize} />


        {
            props.users.map(u => <User user={u}
                followingInProgress={props.followingInProgress}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow} />

            )
        }
    </div>
}

export default Users

