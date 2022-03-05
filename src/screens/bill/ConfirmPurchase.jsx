import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native';

const ConfirmPurchase = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.subcontainer}>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>Entrega</Text>
                    </View>
                    <Text></Text>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>Tu compra</Text>
                    </View>
                    <Text></Text>
                    <Pressable
                        style={styles.btn}
                    >
                        <Text style={styles.btnText} >Confirmar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subcontainer:{
        backgroundColor: '#CDC4A9',
        margin: 20,
        padding: 20,
        borderRadius: 15
    },
    containerTitles: {
        borderBottomColor: '#505050',
        borderBottomWidth: 2,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: '#505050'
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
        marginBottom:10
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
    },
})

export default ConfirmPurchase;