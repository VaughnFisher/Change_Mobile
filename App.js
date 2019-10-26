import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class App extends Component{
  
  constructor(){
    super()

    this.state = {
      title: "Welcome to Change!"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./assets/change_logo.png')} 
          style={{width: 200, height: 200}}
        />
        <Text style={styles.textLarge}>
          {this.state.title}
        </Text>
      </View>
    );  
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});       

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           