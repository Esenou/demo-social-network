import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
}
from '../../redux/users-reducer';
import { getUsers, getPageSize,getTotalUserCount,getCurrentPage,getIsFetching,getFollowingInProgress} from '../../redux/users-selectors';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        //this.props.setCurrentPage(this.props.currentPage);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}

            />
        </>

    }

}



let mapStateToProps = (state) => {

     
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


let AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers
    })(AuthRedirectComponent);