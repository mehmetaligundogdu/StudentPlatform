import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../../styles/Button.style';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
