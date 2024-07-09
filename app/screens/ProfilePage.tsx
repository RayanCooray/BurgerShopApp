import React from 'react';
import { View, Text, TextInput, Button, StyleSheet ,SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.decorator}></View>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.heading2}>Edit Profile</Text>
    
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
      />
      <Button title="Save Changes" onPress={() => console.log('Changes saved!')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  decorator: {
    width: 500,
    height: 300,
    backgroundColor: '#FFAF32',
    borderBottomRightRadius : 300,
    borderBottomLeftRadius : 300,
    alignSelf: 'center',
  },
  container: {
    width: '90%',
    margin: 20,
    flex: 1,
    padding: 16,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
    bottom: 290
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
