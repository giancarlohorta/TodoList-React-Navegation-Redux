import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PersistGate } from 'redux-persist/integration/react';

import Counter from './components/Counter'
import StaticCounter from './components/StaticCounter'

import { modificaNome, inserirNaLista,acessarDados } from './actions/autenticacaoActions'
import { store, persistor } from './store/store'


const mapStateToProps = state =>(
  {
    key: state.autenticacaoReducer.key,
    text: state.autenticacaoReducer.text,
    itens: state.autenticacaoReducer.itens,
  }
)

// Create our stack navigator

let CounterContainer = connect(mapStateToProps, {modificaNome, inserirNaLista})(Counter);
let StaticCounterContainer = connect(mapStateToProps, {acessarDados})(StaticCounter);

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
        <PersistGate loading={null} persistor={persistor}>
         <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

