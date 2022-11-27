import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import styles from '../styles/StudentSign.style';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button';
import StudentProfile from './StudentProfile';

function Sign({navigation}) {
  const [userName, setUserName] = useState('');
  const [userSurName, setSurName] = useState('');
  const [userID, setID] = useState('');
  const [userDepartment, setDepartment] = useState('');

  function handleSubmit() {
    const user = {
      userName,
      userSurName,
      userID,
      userDepartment,
    };
    if (!userName || !userSurName || !userID || !userDepartment) {
      Alert.alert('Bilgiler Boş Bırakılamaz');
      return;
    }
    navigation.navigate('StudentProfile', {user});
  }

  return (
    <View style={styles.container}>
      <SignInput
        label="Öğrenci Adı"
        placeholder="Adınızı giriniz..."
        onChangeText={setUserName}
      />
      <SignInput
        label="Öğrenci Soyadı"
        placeholder="Soyadınızı giriniz..."
        onChangeText={setSurName}
      />
      <SignInput
        label="Öğrenci Numarası"
        placeholder="Öğrenci numaranızı giriniz..."
        onChangeText={setID}
      />
      <SignInput
        label="Bölüm"
        placeholder="Bölümünüzü  giriniz..."
        onChangeText={setDepartment}
      />
      <Button text="Giriş Yap" onPress={handleSubmit} />
    </View>
  );
}
export default Sign;
