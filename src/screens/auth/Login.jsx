import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate("Register");
    }

    const goToForgotPassword = () => {
        navigation.navigate("ForgotPassword");
    }

    const login = () => {
        
    }

  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require('../../assets/interflora.jpg')} />
        <Text style={[styles.text, styles.title]} >
            Inicia Sesión
        </Text>
        <Text style={styles.text} >
            Hola, ingresa a Interflora o {'\n'} <Pressable onPress={goToRegister}><Text style={[styles.text, styles.link]}>crea una cuenta</Text></Pressable>
        </Text>
      <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder='Correo'
          />
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            secureTextEntry={true}
          />
          <Pressable
            style={styles.btn}
            onPress={login}
          >
              <Text style={styles.btnText} >Ingresar</Text>
          </Pressable>
      </View>
      <Pressable onPress={goToForgotPassword}><Text style={[styles.text, styles.link]} >Olvidé mi contraseña</Text></Pressable>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
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
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        color: '#0042EC',
        textDecorationLine: "underline"
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 30,
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