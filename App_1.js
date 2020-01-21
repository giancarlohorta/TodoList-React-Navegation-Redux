import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, combineReducers } from 'redux';

import Counter from './components/Counter'
import StaticCounter from './components/StaticCounter'

import reducers from './reducers'
import { modificaValor, modificaValor2 } from './actions/autenticacaoActions'

let store = createStore(reducers);

const mapStateToProps = state =>(
  {
    valor: state.autenticacaoReducer.valor,
    valor2: state.autenticacaoReducer.valor2,
  }
)

// Create our stack navigator

let CounterContainer = connect(mapStateToProps, {modificaValor, modificaValor2})(Counter);
let StaticCounterContainer = connect(mapStateToProps, {modificaValor, modificaValor2})(StaticCounter);

let RootStack = createStackNavigator({
  Counter: CounterContainer,
  StaticCounter: StaticCounterContainer,
},
{
    initialRouteName: 'Counter',
}
);
// And the app container
let Navigation = createAppContainer(RootStack);

// Render the app container component with the provider around it
export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>

    );
  }
}

