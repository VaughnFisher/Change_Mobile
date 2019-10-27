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

      currentPage: "HOME"
    }

    this.buttonHOMEtoTRINFO = this.buttonHOMEtoTRINFO.bind(this)
    this.buttonHOMEtoBANK = this.buttonHOMEtoBANK.bind(this)
    this.buttonBACK = this.buttonBACK.bind(this)

  }

  buttonHOMEtoTRINFO(){
      console.log("Home to Transaction Info")
      this.setState({currentPage: "TRINFO"})
  }

  buttonHOMEtoBANK(){
      console.log("Home to Bank")
      this.setState({currentPage: "BANK"})
  }

  buttonBACK(){
      console.log("BACK")
      this.setState({currentPage: "HOME"})
  }


  renderPage(){
    if (this.state.currentPage === "HOME"){
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
                    <TouchableHighlight onPress={this.buttonHOMEtoTRINFO}>
                      <View key = {item.charge} style={styles.transaction}>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.charge}>{item.charge}</Text>
                      </View>
                    </TouchableHighlight>
                ))
              } 
            </ScrollView>
          </View>
          <View style={{flexDirection:'row', alignItems: 'stretch'}}>
            <View style={{marginLeft: 20, marginTop: 50, width: 120, alignSelf: 'flex-start'}}>
              <Button
                  title="Account"
                  color="#c67258"
                  onPress={this.buttonHOMEtoBANK}
              />
            </View>
            <View style={{marginLeft: 80, marginTop: 50, width: 120, alignSelf: 'flex-end'}}>
              <Button
                  title="Your Banks"
                  color="#c67258"
                  onPress={this.buttonHOMEtoBANK}
              />
            </View>
          </View>
        </View>
      )
    }

    if (this.state.currentPage === "TRINFO"){
      return(
        <View style={styles.page}>
        <View style={styles.body}>
          
            <Text style={styles.total}>
              {this.state.total}
            </Text>
            <Text style={styles.textLarge}>
              Total Change{"\n"}
            </Text>
          </View>
            <View style={styles.body2}>
              <Text style={{textAlign: 'center', fontSize: 30, color: '#fff'}}>
                Transaction Info
              </Text>
              <View style={styles.transactionInfo}>
                <Text style={{textAlign: 'left', fontSize: 15, color: '#fff'}}>
                  Location:       Ikes Sandwiches{"\n"}
                  You Owed:       $8.75{"\n"}
                  You Paid:       $10.00{"\n"}
                  Cash Back:      $1.00{"\n"}
                  Change:         $0.23{"\n"}
                  Tip?            No
                </Text>
              </View>
            </View>
            <Button
              title="Back"
              color="#c67258"
              onPress={this.buttonBACK}
            />
        </View>
      )
    }

    if (this.state.currentPage === "BANK"){
      return(
        <View style={styles.page}>
        <View style={styles.body}>
          </View>
            <View style={styles.body2}>
              <Text style={{textAlign: 'center', fontSize: 30, color: '#fff'}}>
                Transaction Info
              </Text>
              <View style={styles.transactionInfo}>
                <Text style={{textAlign: 'left', fontSize: 15, color: '#fff'}}>
                  Location:       Ikes Sandwiches{"\n"}
                  You Owed:       $8.75{"\n"}
                  You Paid:       $10.00{"\n"}
                  Cash Back:      $1.00{"\n"}
                  Change:         $0.23{"\n"}
                  Tip?            No
                </Text>
              </View>
            </View>
            <Button
              title="Back"
              color="#c67258"
              onPress={this.buttonBACK}
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
  //HOME
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

  //TRINFO
  body2: {
    height: 300,
    backgroundColor: '#e88162',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },

  transactionInfo: {
    backgroundColor: '#c67258',
    height: 245,
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
  },

  white: {
    color: '#fff',
  }


});       

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           