
import { INCREMENT } from './actions';
import { tassign  } from 'tassign';

export interface IAppState {
	counter : number,
	messaging : {
		newMessage : string
	},
	tasks: any[]
}

export const INITIAL_STATE : IAppState = {
	counter: 0,
	messaging : {
		newMessage : "lorem"
	},
	tasks : [13]
}

export function rootReducer(state : IAppState, action) : IAppState {
	switch (action.type) {
		case INCREMENT :
			// code...
			// return tassign(state, { 
			// 	counter : state.counter + 1,
			// 	tasks : state.tasks.push("r")
			// }) 
			let returnObj = Object.assign({},state);
			returnObj.counter = state.counter + 1;
			returnObj.tasks = returnObj.tasks.concat( Math.floor(Math.random() * 200) );
			returnObj.messaging.newMessage = state.messaging.newMessage + " " + Math.random();
			return returnObj
	}
	return state;
}