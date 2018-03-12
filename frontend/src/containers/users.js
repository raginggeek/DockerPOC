import { connect } from 'react-redux';
import Users from '../components/users';
import {REMOVE_USER} from "../constants/actionTypes";

function mapDispatchToProps(dispatch) {
    return {
        handleClick(id){
            dispatch({
                type: REMOVE_USER,
                payload: {
                    id
                }
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;


