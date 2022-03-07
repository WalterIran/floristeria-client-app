import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView, Alert } from 'react-native';
import Detail from '../../components/OrderDetail.component';
import useAuth from '../../hooks/useAuth';

//AXIOS
import axios from '../../api/axios';
const INSERT_URL = '/payment/registerbill/';
const PAY_URL = '/payment/doPayment/';

const ConfirmPurchase = () => {
    const { auth } = useAuth();

    var datos = {
        userId: 11,
        deliveryDate: '2022-02-28',
        taxAmount: 500.00,
        destinationPersonName: "Roberto",
        destinationPersonPhone: "982892",
        destinationAddress: "Los Hidalgos",
        destinationAddressDetails: "Casa 8",
        city: "TGU",
        dedicationMsg: "Te quiero",
        cartId: 30
    };

    var datosPago = {
        emailUser: auth?.user?.email,
        amount: "10000",
        tokenId: "tok_bypassPending",
        description: "Pago de compra en Interflora"
    };

    const insertBill = async () => {
        try {
            const response = await axios.post(
                INSERT_URL,
                JSON.stringify(datos),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            )
            .then(res =>{
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
            Alert.alert("Ocurrio un error al procesar su compra");
        }
    }

    const pay = async () => {
        try {
            const response = await axios.post(
                PAY_URL,
                JSON.stringify(datosPago),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            )
            .then(res =>{
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
            Alert.alert("Ocurrio un error al procesar su compra");
        }
    }

    const serchCartDetail = () =>{
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.subcontainer}>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>Entrega</Text>
                    </View>
                    <Text>Fecha de entrega: {datos.date}</Text>
                    <Text>Entrega a: {datos.nombre +" "+datos.apellido}</Text>
                    <Text>Dirección: {datos.direccion}</Text>
                    <Text>Ciudad: {datos.selectedCity}</Text>
                    <Text>Telefono: {datos.telefono}</Text>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>Tu compra</Text>
                    </View>
                    <View style={{marginVertical: 12}}>
                        <Detail product='Roma sexta' cant={1} price={45.00} />
                        <Detail product='Roma sexta' cant={1} price={45.00} />
                        <Detail product='Roma sexta' cant={1} price={45.00} />
                        <Detail product='Roma sexta' cant={1} price={45.00} />
                    </View>
                    <View style={{marginVertical: 12}}>
                        <View style={styles.totals}>
                            <Text style={styles.text}>Subtotal:</Text>
                            <Text style={styles.text}>$ 165</Text>
                        </View>
                        <View style={styles.totals}>
                            <Text style={styles.text}>ISV:</Text>
                            <Text style={styles.text}>$ 15</Text>
                        </View>
                        <View style={styles.totals}>
                            <Text style={styles.text}>TOTAL:</Text>
                            <Text style={styles.text}>$ 180</Text>
                        </View>
                    </View>
                    <Pressable
                        style={styles.btn}
                        onPress={pay}
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
    text: {
        fontSize: 18,
    },
    totals: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default ConfirmPurchase;