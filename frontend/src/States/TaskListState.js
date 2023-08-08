// state.js
import { atom } from 'recoil';

//using recoil state to having live updates from tasklists

export const taskListState = atom({
    key: 'taskListState',
    default: [], // default value
});
