import {ADD_USER, GET_DATA} from "../constants/actionTypes";
import {REMOVE_USER} from "../constants/actionTypes";
import {addUsers, deleteUser} from "../utils/users";

let initialState = [
    {id:0, name: '', age: 0, title: '', project: ''}
];
export default function users(state=initialState, action) {
    switch (action.type) {
        case ADD_USER:
            action.payload.id = Math.floor(Math.random() * 100);
            addUsers(action.payload);
            return [...state, action.payload];
        case REMOVE_USER:
            let newState = state.filter(user => user.id !== action.payload.id);
            deleteUser(action.payload.id);
            return newState;
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
}