import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Menu = () => {
  const navigation = useNavigation();

  const goToEditProfile = () => {
    navigation.navigate('EditProfile')
  }

  return (
    <View>
      <Text>User Menu options</Text>
      <Button onPress={goToEditProfile} title='Ir a editar perfil' />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})