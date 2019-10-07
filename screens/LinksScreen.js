import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function LinksScreen() {
  const [value, onChangeText] = React.useState('Escribir aqui');

  return (
   
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />

<Button
    title="Opcion A"
    
    onPress={() => Alert.alert('Opcion A')}
  />


      </ScrollView>

  
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Tab 2',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
