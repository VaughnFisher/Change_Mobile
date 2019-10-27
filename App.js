import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableHighlight } from 'react-native';



class App extends React.Component{
  
  constructor(){
    super()

    this.state = {
      total: "$1.35",
      transactions: [
          {'location': 'Ikes Sandwiches', 'charge': '+$0.23'},
          {'location': 'Target', 'charge': '-$0.10'},
          {'location': 'Starbucks', 'charge': '+$0.70'},
          {'location': 'UCSC Dining', 'charge': '+$0.25'},
          {'location': 'Starbucks', 'charge': '+$0.70'},
          {'location': 'UCSC Dining', 'charge': '-$0.01'},
          {'location': 'Safeway', 'charge': '-$0.01'},
          {'location': 'Starbucks', 'charge': '+$0.92'},
      ],

      currentPage: "page2"
    }

    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress(){
    console.log("Pressed")
    if (this.state.currentPage === "page1"){
      this.setState({currentPage: "page2"})
    }
    else if(this.state.currentPage === "page2"){
      this.setState({currentPage: "page1"})
    }
  }


  renderPage(){
    if (this.state.currentPage === "page1"){
      return(
        <View style={styles.page}>
          <View style={styles.body}>
          
            <Text style={styles.total}>
              {this.state.total}
            </Text>
            <Text style={styles.textLarge}>
              Total Change{"\n"}
              Recent Transactions
            </Text>
          </View>

          <View style={styles.recentTransactions}>
            <Text style={{position: 'absolute', fontSize: 20, color: '#fff'}}> 
              Location                                   Change
            </Text>
            <ScrollView style={{marginTop: 30, marginBottom: 5, marginRight:5,marginLeft:5}}>{
                this.state.transactions.map((item, index) => (
                    <TouchableHighlight onPress={this.onButtonPress}>
                      <View key = {item.charge} style={styles.transaction}>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.charge}>{item.charge}</Text>
                      </View>
                    </TouchableHighlight>
                ))
              } 
            </ScrollView>
          </View>
        </View>
      )
    }

    if (this.state.currentPage === "page2"){
      return(
        <View style={styles.page}>
            <View style={styles.body2}>
              <Text style={styles.white}>
                Transaction Info
              </Text>
              <View style={styles.transactionInfo}>
                <Text style={styles.white}>
                  Test
                </Text>
              </View>
            </View>
            <Button
              title="Back"
              color="#c67258"
              onPress={this.onButtonPress}
            />
        </View>
      )
    }

    else{
      return(
        <View></View>
      )
    }
  }

  render() {
    return (
      this.renderPage()

    );  
  }
  
}

const styles = StyleSheet.create({

  //page1
  page: {
    flex: 1,
    backgroundColor: '#f7b18f',
  },

  body: {
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 50,
  },

  textLarge: {
    color: '#c67258',
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: -25,
    lineHeight: 75,
  },

  total: {
    color: '#fff',
    fontSize: 70,
    alignItems: 'center',
    marginTop: 100,
  },

  transaction: {
    backgroundColor: '#efefef',
  },

  bottomNav: {
    backgroundColor: '#c67258',
    height: 200,
    width: 100,
    color: '#44bf31',
  },

  recentTransactions: {
    backgroundColor: '#e88162',
    height: 200,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },

  transaction:{
    borderWidth: 0.5,
    borderColor: '#b7b7b7',
    backgroundColor: '#c67258',
    textAlignVertical: 'center',
    flexDirection:'row',
  },

  location: {
    color: '#fff',
    fontSize: 25,
    width: 250,
  },

  charge: {
    color: '#fff',
    fontSize: 25,
  },

  //page2
  body2: {
    height: 300,
    backgroundColor: '#e88162',
    marginTop: 250,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },

  transactionInfo: {
    backgroundColor: '#c67258',
    height: 250,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },

  white: {
    color: '#fff',
  }


});       

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           