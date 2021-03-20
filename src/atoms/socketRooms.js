import { atom } from "recoil";

/**
 * This is used to store all the connections
 * to the socketio handle in order to disconnect 
 * from them when the client exit.
 * The cleanup is executed inside the useSocket hook. 
 */
const roomState = atom({
    key: 'socketRoomsState',
    default: []
});