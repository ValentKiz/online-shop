import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
// import {createRoot} from 'react-dom/client';
import App from './App';
import UserStore from "./app/store/UserStore";
import DeviceStore from "./app/store/DeviceStore";

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root') || document.createElement('div')).render(
	<Context.Provider value={{user: new UserStore(), device: new DeviceStore()}}>
		<App />
	</Context.Provider>
);