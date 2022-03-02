import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Register = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

  return (
    <SafeAreaView style={styles.container}>
        <Pressable onPress={goBack} style={styles.backBtn}>
            <IonIcons name="arrow-back" size={32} color='#777' />
        </Pressable>
        <Image style={styles.img} source={require('../../assets/interflora.jpg')} />
        <Text style={styles.title} >
            Crea una cuenta
        </Text>
      <View style={styles.formContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',width: '100%'}}>
            <TextInput
                style={[styles.input, {flex: 1, marginRight: 6}]}
                placeholder='Nombre'
            />
            <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder='Apellido'
            />

          </View>
          <TextInput
            style={styles.input}
            placeholder='Correo'
          />
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder='Confirmar Contraseña'
            secureTextEntry={true}
          />
          <Pressable
            style={styles.btn}
          >
              <Text style={styles.btnText} >Crear cuenta</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    backBtn: {
        backgroundColor: '#dddd',
        borderRadius: 100,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 64,
        left: 16,
        zIndex: 2
    },
    img: {
        width: '80%',
        height: 120,
        marginVertical: 24,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 24,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 16,
        paddingHorizontal: '10%'
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