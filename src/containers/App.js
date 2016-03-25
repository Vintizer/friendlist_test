import React, { Component } from 'react';
import { combineReducers,  createStore} from 'redux';
import { Provider } from 'react-redux';


import FriendListApp from './FriendListApp';
import * as reducers from '../reducers/friends';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
	render() {
		return (
				<Provider store={store}>
					<FriendListApp /> }
				</Provider>
		);
	}
}