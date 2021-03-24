import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    curso: 0,
    cursos: [
      {
        key:1,
        nome: 'Administracao',
        valor: 600.00
      },
      {
        key:2,
        nome: 'Biologia',
        valor: 400.00
      },
      {
        key:3,
        nome: 'Contabeis',
        valor: 300.00
      }
    ]
  }
}

  render(){

    let cursosItem = this.state.cursos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>

    })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Universidade</Text>
      <Picker
      selectedValue={this.state.curso}
      onValueChange={ (itemValue, itemIndex) => this.setState({curso: itemValue})}
      >
        {cursosItem}
      </Picker>
      <Text style={styles.cursos}>Voce escolheu o curso de: {this.state.cursos[this.state.curso].nome}</Text>
      <Text style={styles.cursos}>R$ {this.state.cursos[this.state.curso].valor.toFixed(2)}</Text>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cursos: {
    marginTop: 15,
    fontSize: 25,
  },
});
