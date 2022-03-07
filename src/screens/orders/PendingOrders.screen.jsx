import { StyleSheet, ActivityIndicator, SafeAreaView, Platform, FlatList } from 'react-native'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//Components
import Order from '../../components/Order.component';

//API
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const LIMIT = 5;
let PAGE = 1;

const Orders = () => {
  const navigation = useNavigation();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const [orders, setOrders] = useState(null);

  const goToOrderDetail = (billId) => {
    navigation.navigate('OrderDetail', {billId});
  }

  useEffect(() => {
    ( async () => {
      await loadOrders();
    })();
  }, []);

  const loadOrders = async () => {
    try {
      const response = await axiosPrivate.get(`orders/byuser/${auth.user.id}/pending?limit=${LIMIT}&page=${PAGE}`);
      setOrders(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <SafeAreaView>
      {
        orders ? (
          <FlatList 
            data={orders}
            numColumns={1}
            keyExtractor={(order, index) => String(order.billId)}
            renderItem={({item}) => <Order {...item} goTo={goToOrderDetail} />}
            contentContainerStyle={styles.flatListContentContainer}
          />
        ) : (
          <ActivityIndicator />
        )
      }
    </SafeAreaView>
  )
}

export default Orders;

const styles = StyleSheet.create({
  flatListContentContainer: {
      paddingHorizontal: 5,
      marginTop: Platform.OS === 'android' ? 30 : 0,
  },
});