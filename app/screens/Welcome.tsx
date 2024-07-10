import { View, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    );

    rotateAnimation.start();

    const timer = setTimeout(() => {
      rotateAnimation.stop();
      navigation.navigate('Home');
    }, 4000); 

    return () => {
      clearTimeout(timer);
      rotateAnimation.stop();
    };
  }, [rotateValue, navigation]);

  
  const handleGetStarted = () => {
    navigation.navigate('Profile'); 
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.backFilters}>
      <TouchableOpacity>
        <Animated.View style={[styles.imageLogo, { transform: [{ rotate: rotation }] }]}>
          <Image 
            source={require('../../assets/applogo.png')} 
            style={{ width: '100%', height: '100%' }} 
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backFilters: {
    flex: 1,
    backgroundColor: '#F8EDE3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 300,
    height: 300,
  },
});
