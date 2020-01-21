import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';

export default class Counter extends React.Component {
    static navigationOptions = {
      title: 'Counter!',
    };
  
    render() {
      return (
        <View style={styles.container}>

          <View style={styles.inputView}>
            <TextInput style={styles.input} value={this.props.text} onChangeText={ texto => this.props.modificaNome(texto)}/>
            <Button onPress={()=> this.props.inserirNaLista()}title='Inserir'/>
            <Text>{this.props.id}</Text>
          </View>
          <Button
            title="Go to static count screen"
            onPress={() => this.props.navigation.navigate('StaticCounter')}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    lista: {
      marginTop: 20,
    },
    cel:{
      paddingVertical: 20,
      backgroundColor: '#E4EBEE',
      fontSize: 18,
      marginBottom: 2,
    },
    inputView:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input:{
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderWidth: 3,
      padding: 10,
      margin:20,
      flex: 1,
    }
  });
  
  