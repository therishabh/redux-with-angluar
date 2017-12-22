import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	@select() counter;
	@select() tasks;
	@select(['messaging','newMessage']) newMessage; // this is equal to messaging.newMessage
	@select( (s:IAppState) => s.messaging.newMessage) nMessage; // this is equal to messaging.newMessage

	randomArray : any[] = [1];

	constructor(private ngRedux : NgRedux<IAppState>) {
		// ngRedux.subscribe(() => {
		// 	this.counter = (ngRedux.getState()).counter;
		// })
	}

	increment() {
		this.ngRedux.dispatch({type : INCREMENT})
		this.randomArray.push( Math.floor(Math.random() * 200) )
	}
	incre(){
	}
}
