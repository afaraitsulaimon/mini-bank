import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import Top from "../components/top";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/building.png")}
        style={styles.backgroundImage}
      >
       <Top/>

        <View style={styles.quickLinks}>
          <View style={{ width:'100%', flexDirection:'column' }}>
            <View style={styles.quickLinks1}>
              <Text style={styles.quickLinks1Text}>Quick Balance</Text>
              <Text style={styles.quickLinks1Text}>Quick Transfer</Text>
              <Text style={styles.quickLinks1Text}>Quick Airtime</Text>
            </View>

            <View style={styles.quickLinks2}>
              <Text style={styles.quickLinks2Text}>Soft Token</Text>
              <Text style={styles.quickLinks2Text}>Account Manager</Text>
              <Text style={styles.quickLinks2Text}>Open Account</Text>
            </View>


            <View style={styles.downButton}>
              <Text style={styles.downButtonText1}>Sign in</Text>
              <Text style={styles.downButtonText2}>SignUp</Text>
            </View>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#8cb0ff",
    flex: 1,
  },

  backgroundImage: {
    height: 670,
    width: "100%",
  },
  

  quickLinks: {
    height:'100%',
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end'
   
  },

  

  quickLinks1: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:30

   
  },
  quickLinks1Text: {
    maxWidth: 100,
    backgroundColor: "#8cb0ff",
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3362cc",
    color:'#3362cc',
    textAlign:'center',
    fontWeight:'700'
  },

  quickLinks2: {
   
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:30

    
  },

  quickLinks2Text: {
    maxWidth: 100,
    backgroundColor: "#8cb0ff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3362cc",
    fontWeight:'600',
    color:'#3362cc',
    textAlign:'center'
    
  },
  
  downButton:{
    flex:1,
    flexDirection:'row',
    alignItems:'end',
    justifyContent:'space-around',
    marginBottom:10
    
},
downButtonText1:{
    maxWidth:'50',
    backgroundColor:'#3362cc',
    padding:10,
    borderRadius:5,
    borderWidth: 2,
    borderColor:'white',
    color:'white',
    fontWeight:'600'

},

downButtonText2:{
    maxWidth:'50',
    backgroundColor:'#3362cc',
    padding:10,
    borderRadius:5,
    borderWidth: 2,
    borderColor:'white',
    color:'white',
    fontWeight:'600'
}
});
