import * as React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class StaticCounter extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this)
  }
  
  renderItem(obj){
      let key = obj.item.key
      return(
        <TouchableOpacity style={styles.container} onPress={()=> this.props.acessarDados(key)}>
          <Text style={styles.cel}>{obj.item.desc}</Text>
        </TouchableOpacity>
      )
    }
    render() {
      return (

            <FlatList style={styles.lista} data={this.props.itens} renderItem={this.renderItem}/>

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
      marginTop: 90,
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
  