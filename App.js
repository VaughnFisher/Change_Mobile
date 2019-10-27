import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView,
         TouchableHighlight,TextInput} from 'react-native';



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

      currentPage: "ACCOUNT"
    }

    this.buttonHOMEtoTRINFO = this.buttonHOMEtoTRINFO.bind(this)
    this.buttonHOMEtoBANK = this.buttonHOMEtoBANK.bind(this)
    this.buttonHOMEtoACCOUNT = this.buttonHOMEtoACCOUNT.bind(this)
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

  buttonHOMEtoACCOUNT(){
      console.log("Home to ACCOUNT")
      this.setState({currentPage: "ACCOUNT"})
  }

  buttonBACK(){
      console.log("Back")
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
                  onPress={this.buttonHOMEtoACCOUNT}
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
          <Text style={{marginTop: 25, textAlign: 'center', fontSize: 40, color: '#c67258'}}>
            Current Bank
          </Text>
          <Text style={{marginTop: -10,textAlign: 'center', fontSize: 40, color: '#fff'}}>
            CHASE
          </Text>
          <View style={styles.body3}>
            <Image 
                  style={{height:200, width: 300, alignSelf: 'center', marginTop: 10}}
                  source={require('./assets/chase.png')}
            />
            <View style={styles.transfer}>
              <Button
                title="TRANSFER"
                color="#c67258"
              />
            </View>
            <View style={styles.bankInfo}>
                <TextInput  
                  placeholder="Amount"  
                  underlineColorAndroid='transparent'  
                  style={styles.TextInputStyle}  
                  keyboardType={'numeric'} 
                />
                <Text style={{textAlign: 'center', fontSize:16, color: '#fff'}}>
                  How much would you like to transfer?
                </Text>
            </View>

          </View>

          <Text style={styles.total3}>
            {this.state.total}
          </Text>
          <Text style={styles.textLarge3}>
            Total Change{"\n"}
          </Text>
          <Button
            title="Back"
            color="#c67258"
            onPress={this.buttonBACK}
          />
        </View>
      )
    }

    if (this.state.currentPage === "ACCOUNT"){
      return(
        
        <View style={styles.page4}>
          <View style={styles.body4}>
            <Text>
              
            </Text>
            <View style={styles.info}>
        
          </View>
          </View>
          <Button
                title="Back"
                color="#c67258"
                onPress={this.buttonBACK}
                style={{flexGrow: 0, position: 'absolute',bottom:0}}
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
    flex: 1,
    height: 300,
    backgroundColor: '#e88162',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },

  transactionInfo: {
    backgroundColor: '#c67258',
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    height: 300,
  },

  white: {
    color: '#fff',
  },
  //BANK
  body3: {
    flex: 1,
    backgroundColor: '#e88162',
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },

  bankInfo: {
    backgroundColor: '#c67258',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    height: 130,
  },

  textLarge3: {
    color: '#c67258',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: -30,
  },

  total3: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: -10,
  },

  TextInputStyle:{
    textAlign:'center',
    fontSize: 30,
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#b7b7b7',
    marginTop: 35,
    marginLeft: 30,
    marginRight: 30,
  },

  transfer:{
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
  },

  //ACCOUNT

  page4: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#f7b18f',
  },

  body4: {
    backgroundColor: '#e88162',
    height: '85%',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 10
  },

  info: {
    backgroundColor: '#c67258',
    height: 380,
    marginTop: 175,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,

  }



});       

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           