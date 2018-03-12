import { connect } from 'react-redux';
import {GET_DATA} from "../constants/actionTypes";
import App from "../components/App";

function mapDispatchToProps(dispatch) {
    return {
        gotData(payload){
            dispatch({
                type: GET_DATA,
                payload: payload
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

let appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;


