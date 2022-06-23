import { StyleSheet, Text, View,TextInput,TouchableOpacity} from "react-native";
import React from "react";
import Top from "../components/top";

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      
       <Top/>

        <View style={styles.formHolder}>
          <View style={{ width:'100%',  }}>
            <View style={styles.formLinks}>
                <form>
                <View style={styles.inputHolder}>
              <TextInput placeholder="email" style={styles.emailInput} />
              <TextInput placeholder="password" secureTextEntry={true} style={styles.passwordInput}/>
              </View>


              <View style={styles.loginButtonHolder}>
              <TouchableOpacity style={styles.loginButton}>
                <Text>Login</Text>
              </TouchableOpacity>

              </View>

              </form>
            </View>


            <View style={styles.bottom}>
                <TouchableOpacity>
                        <Text>forgot password?</Text>
                </TouchableOpacity>

                
                <TouchableOpacity>
                        <Text>SignUp</Text>
                </TouchableOpacity>

            </View>

          </View>
        </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    height:670
  },



  formHolder: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end'

   
  },

  

  formLinks: {
 
    marginBottom:20
   
  },

  inputHolder:{
    width:'100%',
    marginBottom:20,
    flexDirection:'column',
    alignItems:'center'
   
  },
  emailInput:{
    width:280,
    height:40,
    borderColor:'#2196f3',
    borderBottomWidth:1,
    marginBottom:10,
    marginTop:10,
    padding:10,
    color:'#2196f3',
    fontWeight:'700',
    fontSize:'10'

  },
  passwordInput:{
    width:280,
    height:40,
    borderColor:'#2196f3',
    borderBottomWidth:1,
    marginBottom:10,
    padding:10,
    color:'#2196f3',
    fontWeight:'700',
    fontSize:'10'


  },
 
  loginButtonHolder:{
    alignItems:'center'
  },

  loginButton:{

    width:200,
    height:40,
    backgroundColor:'#80c2f5',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',

  },
  bottom:{
    flexDirection:'row',
    padding:10,
    justifyContent:'space-around'
  }



  
});
