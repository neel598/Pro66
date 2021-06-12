import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#1167b1'}
          centerComponent={{
            text: 'Text To Speech Coverter',
            style: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={require('./assets/textToSpeech.png')}
        />

        <Text style={styles.title}>Enter the word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(name) => this.setState({ name: name })}
          value={this.state.name}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.name;
            word === '' ? alert('please type in a message') : this.speak();
          }}>
          <Text style={styles.buttonText}>Click Here to hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0efff',
  },
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: '#187bcd',
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 17,
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 40,
    borderRadius: 100,
    borderColor: '#187bcd',
    backgroundColor: '#2a9df4',
    padding: 5,
    width: 300,
    height: 70,
    borderWidth: 3,
  },
  buttonText: {
    paddingTop: '10px',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
