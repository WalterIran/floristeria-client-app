import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProductResult = ({img, title, desc, price}) => {
  return (
    <View style={styles.productContainer}>
        <View style={styles.imgContainer}>
            <Image source={img} style={styles.img} />
        </View>
        <View style={styles.descContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
            <Text style={styles.price}>{price} $</Text>
        </View>
    </View>
  )
}

export default ProductResult

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        borderBottomColor: "#888",
        borderBottomWidth: 1.5,
        paddingVertical: 10,
    },
    imgContainer: {
        width: 135,
        height: 135,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 12,
        overflow: 'hidden',
    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    descContainer: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'space-evenly'
    },
    title: {
        fontWeight: 'bold',
        color: '#BFA658',
        fontSize: 18,
    },
    desc: {
        color: "#666"
    },
    price: {
        fontWeight: '700',
    },
});