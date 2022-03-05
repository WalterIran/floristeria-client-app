import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign';
import Status from '../../components/Status.component';
import Detail from '../../components/OrderDetail.component';

const OrderDetail = () => {
  return (
    <SafeAreaView style={styles.background}>
        <ScrollView contentContainerStyle={{paddingVertical: 32, paddingHorizontal: 16}}>
          <View style={[styles.container, styles.shadow]}>
              <View style={styles.section}>
                <Text style={styles.orderNum}>Pedido: #12345</Text>
                <View style={styles.line}></View>
                <Text>
                  <Text style={[styles.text]}>Estado: </Text>
                  <Text style={[styles.status, styles.text]}>Enviando</Text>
                </Text>
                <View style={styles.statusSection}>
                    <Status msg='Recibida' status='done' />
                    <View style={[styles.statusLine, styles.activeBg]}></View>
                    <Status msg='Preparando' status='done' />
                    <View style={[styles.statusLine, styles.activeBg]}></View>
                    <Status msg='Enviando' status='pending' />
                    <View style={[styles.statusLine, styles.pendingBg]}></View>
                    <Status msg='Entregado' status='none' />
                </View>
                <Text style={[styles.text, {marginVertical: 1}]}>Fecha de Pago: 16/02/2022, 20:27</Text>
                <Text style={[styles.text, {marginVertical: 1}]}>Fecha de Pago: 18/02/2022, 13:00</Text>
                <Text style={[styles.text, {marginVertical: 1}]}>Recibe: Mariel Miranda</Text>
                <Text style={[styles.text, {marginVertical: 1}]}>Contacto: 99999999</Text>
                <Text style={[styles.text, {marginVertical: 1}]}>Lugar de entrega: Col. XYZ</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.orderNum}>Tu compra</Text>
                <View style={styles.line}></View>
                <View style={{marginVertical: 12}}>
                  <Detail product='Roma sexta' cant={1} price={45.00} />
                  <Detail product='Roma sexta' cant={1} price={45.00} />
                  <Detail product='Roma sexta' cant={1} price={45.00} />
                  <Detail product='Roma sexta' cant={1} price={45.00} />
                </View>
                <View style={styles.totals}>
                  <Text style={styles.text}>Subtotal</Text>
                  <Text style={styles.text}>45.00</Text>
                </View>
                <View style={styles.totals}>
                  <Text style={styles.text}>ISV</Text>
                  <Text style={styles.text}>0.00</Text>
                </View>
                <View style={styles.totals}>
                  <Text style={styles.text}>TOTAL</Text>
                  <Text style={styles.text}>45.00</Text>
                </View>
              </View>
              <View style={styles.section}>
                <Pressable
                  style={styles.btn}
                >
                    <Text style={styles.btnText} >Actualizar Información</Text>
                </Pressable>
              </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default OrderDetail;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  section: {
    marginVertical: 8
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderNum: {
    fontSize: 24,
    fontWeight: '700'
  },
  line: {
    width: '100%',
    backgroundColor: '#000',
    height: 1,
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
  },
  status: {
    color: '#86EFAC'
  },
  statusSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 12
  },
  statusLine: {
      height: 4,
      width: 40,
  },
  totals: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  activeBg: {
    backgroundColor: '#86EFAC'
  },
  pendingBg: {
    backgroundColor: '#ababab'
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
})