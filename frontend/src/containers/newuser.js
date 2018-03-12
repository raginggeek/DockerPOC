import { connect } from 'react-redux';
import Newuser from '../components/newuser';
import {ADD_USER} from "../constants/actionTypes";

function mapDispatchToProps(dispatch) {
    return {
        handleChange(payload){
            dispatch({
                type: ADD_USER,
                payload: payload
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        newuser: state.newuser
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Newuser);

export default UsersContainer;


