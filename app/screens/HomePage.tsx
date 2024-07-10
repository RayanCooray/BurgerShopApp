import { View, Text , Button , StyleSheet ,Image ,Dimensions ,SafeAreaView , ImageBackground, TouchableOpacity ,TextInput	} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomePage() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleGoToHome = () => {
    // Navigate to the home screen or perform desired action
    navigation.goBack(); // Replace with your actual navigation logic
  };

  const handleGuestAccount = () => {
    // Handle action for "Proceed with a Guest Account"
    navigation.navigate('Menu'); // Replace with actual navigation logic
  };

  const handleGetStarted = () => {
    // Handle action for "Get Started"
    navigation.navigate('Profile'); // Replace with actual navigation logic
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.backArrow} onPress={handleGoToHome}>
        <Ionicons name="chevron-back-circle-outline" size={35} color="white"/>
      </TouchableOpacity>
      <Text style={styles.createText}>Create an</Text>
      <Text style={styles.AccountText}>account</Text>
      <Text style={styles.signUpText}>Sign up with</Text>
      <TouchableOpacity style={styles.GoogleButton}>
        <Image style={styles.googleimg}  source={require('../../assets/googlesignup.png')} />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../../assets/facebooksignup.png')} style={styles.facebookimg}/>
        <Text style={styles.facebookText}>Facebook</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <Text style={styles.usernameTxt}>UserName</Text>
        <Text style={styles.emailTxt}>Email</Text>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input2}/>
        <TouchableOpacity style={styles.buttonreg} onPress={handleGetStarted}>
          <Text style={styles.regText} >Register</Text>
        </TouchableOpacity>
        <Text style={styles.or}>Or</Text>
        
        {/* { <TouchableOpacity style={styles.buttongus} onPress={handleGuestAccount}>
          <Text style={styles.gusText}>Proceed With Guest Account</Text>
        </TouchableOpacity> } */}
        

        <TouchableOpacity style={styles.buttongus} onPress={handleGuestAccount}>
          <Text style={styles.gusText}>Proceed With Guest Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//TODO :: image 4 ho 5 k enw home ekt slide wenna
const styles = StyleSheet.create({
  or:{
    color: 'white',
    position:'absolute',
    top:'80%'
  },
  gusText:{
    position: 'absolute',
    color: 'blue',
    fontSize: 20,
    fontWeight: '500',
    left: 23,
    top: 11,
  },
  buttongus:{
    position: 'absolute',
    height: 50,
    width: 300,
    bottom: -10,
    left: '10%',
    // backgroundColor: '#FFAF32',
    borderRadius: 7,
  },
  regText:{
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    left: 60,
    top: 11,
  },
  buttonreg:{
    position: 'absolute',
    height: 50,
    width: 200,
    bottom: 100,
    left: '25%',
    backgroundColor: 'rgb(37, 99, 235)',
    borderRadius: 7,
  },
  input2:{
    position: 'absolute',
    height: 40,
    bottom: 170,
    left: '40%',
    borderBottomColor: 'gray', // underline color
    borderBottomWidth: 1,
    color: 'white', // text color
    paddingHorizontal: 100,
    marginVertical: 20,
  },
  input:{
    position: 'absolute',
    height: 40,
    bottom: 240,
    left: '40%',
    borderBottomColor: 'gray', // underline color
    borderBottomWidth: 1,
    color: 'white', // text color
    paddingHorizontal: 100,
    marginVertical: 20,
  },
  emailTxt:{
    position: 'absolute',
    top: 120,
    left: 40,
    color: '#FDFDFD',
    fontSize: 20,
  },
  usernameTxt:{
    position: 'absolute',
    top: 50,
    left: 40,
    color: '#FDFDFD',
    fontSize: 20,
  },
  bottomView:{
    position: 'absolute',
    height: 330,
    width: '95%',
    bottom: 20,
    // backgroundColor: 'black',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookText:{
    position: 'absolute',
    left: 60,
    color: '#FDFDFD',
    fontSize: 20,
    fontWeight: '400',
  },
  facebookimg:{
    width: 30,
    height: 30,
    right: 40,
  },
  facebookButton:{
    position: 'absolute',
    bottom: '50%',
    width: 160,
    height: 60,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    left: '52%',
  },
  googleText:{
    position: 'absolute',
    left: 60,
    color: '#FDFDFD',
    fontSize: 20,
    fontWeight: '400',
  },
  googleimg:{
    width: 30,
    height: 30,
    right: 40,
  },
  GoogleButton:{
    position: 'absolute',
    bottom: '50%',
    width: 160,
    height: 60,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    right: '52%',
  },
  signUpText:{
    position: 'absolute',
    bottom: '60%',
    color:'#FDFDFD',
    fontSize: 20,
    fontWeight: '100',
    opacity: 0.8
  },
  AccountText:{
    position: 'absolute',
    bottom: '66%',
    color:'#FDFDFD',
    fontSize: 50,
    fontWeight: '600',
  },
  createText:{
    position: 'absolute',
    bottom: '72%',
    color:'#FDFDFD',
    fontSize: 50,
    fontWeight: '600',
  },
  backArrow: {
    position: 'absolute',
    right:'88%',
    bottom: '90%',
  },
  container: {
    flex: 1,
    backgroundColor: '#1C1D29',
    alignItems: 'center',
    justifyContent: 'center',
  },
});