import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
// import {myStore} from './components/functionbasedcomponents/Redux/Store'
import { myStore1 } from './components/functionbasedcomponents/TodoAssignment/TodoStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore1}> 
    <App /> 
    </Provider>
   
);


//react ....used to create components
//reactdom used to render components
//components are html tags that always begin with camelcase

