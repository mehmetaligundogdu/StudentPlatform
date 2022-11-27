import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Button from '../components/Button/Button';
import styles from '../styles/Anasayfa.style';

function Welcome({navigation}) {
  function goSign() {
    navigation.navigate('StudentSign');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>H O Ş G E L D İ N İ Z ...</Text>
      <Text style={styles.text}>Gazi Üniversitesi Öğrenci Platformu</Text>
      <Button text="Giriş sayfasına git" onPress={goSign} />
    </View>
  );
}
export default Welcome;
