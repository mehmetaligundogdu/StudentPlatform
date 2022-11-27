import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function StudentProfile({route}) {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Öğrencinin Adı: {user.userName} </Text>
      <Text style={styles.text}>Öğrencinin Soyadı: {user.userSurName} </Text>
      <Text style={styles.text}>Öğrencinin Numaası: {user.userID} </Text>
      <Text style={styles.text}>Öğrencinin Bölümü: {user.userDepartment}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },
});

export default StudentProfile;
