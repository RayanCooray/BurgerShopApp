import { View, Text , Button , StyleSheet ,Image ,Dimensions ,SafeAreaView , ImageBackground, TouchableOpacity 	} from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwindcss-react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomePage() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleGoToHome = () => {
    // Navigate to the home screen or perform desired action
    navigation.navigate('Home'); // Replace with your actual navigation logic
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
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/home.jpg')}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.rectangle}>
            <Text style={styles.title}>Burgerista</Text>
            <Text style={styles.description}>Discover the best burgers in town!</Text>
            <ImageBackground style={styles.imageinHome}>
            </ImageBackground>
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <Text style={styles.or}>Or</Text>
            <TouchableOpacity style={styles.secondaryButton} onPress={handleGuestAccount}>
              <Text style={styles.buttonText}>Proceed with Guest Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
//TODO :: image 4 ho 5 k enw home ekt slide wenna
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageinHome : {

  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white for glassmorphism effect
    padding: 30,
    borderRadius: 20,
    width: '80%',
    height: 650,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)', // Border color for glassmorphism effect
  },
  title: {
    fontFamily: 'IslandMoments-Regular',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    bottom: 150,
  },
  description: {
    fontSize: 18,
    bottom : 130,
    fontWeight : '200',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  or : {
    color : '#F47556',
    top: 190,
  },
  button: {
    backgroundColor: '#FFAF32', // Coral color
    paddingVertical: 12,
    paddingHorizontal: 20,
    top: 190,
    borderRadius: 10,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#4682b4', // SteelBlue color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    top: 200,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});