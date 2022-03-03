import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardDismissMode='on-drag'>
      <Text style={styles.title}>Edita la información general de tu perfil en Interflora</Text>
      <TextInput style={styles.input} placeholder='Identidad' maxLength={13} keyboardType='number-pad' />
      <TextInput style={styles.input} placeholder='Nombre' />
      <TextInput style={styles.input} placeholder='Apellido' />
      <View style={{width: '100%', borderWidth: 1, borderColor: '#ababab', borderRadius: 16, padding: 16, marginBottom: 24}}>
        <Text style={{fontSize: 24, color: '#ababab'}}>Fecha de nacimiento</Text>
        <DateTimePicker
            testID="birthDate"
            style={{width: '100%'}}
            value={new Date()}
            mode="date"
            display="spinner"
            maximumDate={new Date()}
            minimumDate={new Date(1930, 0, 1)}
        />
      </View>
      <TextInput style={styles.input} placeholder='Teléfono' maxLength={8} keyboardType='phone-pad' />
      <TextInput style={[styles.input, styles.multiline]} placeholder='Dirección' multiline />
      <Pressable
        style={styles.btn}
        onPress={() => navigation.goBack()}
      >
          <Text style={styles.btnText} >Actualizar Información</Text>
      </Pressable>
    </ScrollView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center'
  },  
  input: {
    borderWidth: 1,
    borderColor: '#ababab',
    marginBottom: 24,
    height: 52,
    width: '100%',
    borderRadius: 12,
    paddingLeft: 12,
    fontSize: 24
  },
  multiline: {
    height: 175
  },
  btn: {
      backgroundColor: '#BFA658',
      fontSize: 24,
      height: 60,
      width: '100%',
      justifyContent: 'center',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
  },
  btnText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 24,
  }
});