import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {

  return(  
    <View>
 <Button
    title="Opcion A"
    
    onPress={() => Alert.alert('Opcion A')}
  />
  <Text>
  {"\n"}{"\n"}{"\n"}

  </Text>
   <Button
    title="Opcion B"
    
    onPress={() => Alert.alert('Opcion B')}
  />

    </View>
 
);
}

SettingsScreen.navigationOptions = {
  title: 'Tab 3',
};
