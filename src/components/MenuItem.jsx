import React from 'react';
import {
    View, 
    Image, 
    StyleSheet,
    Text
} from 'react-native';

export default class MenuItem extends React.Component {
    render() {
        return (
            <View style={styles.menuItem}>
                <Image
               /* source={{uri:itemImage}} */
                style={styles.image} />
                <Text style={styles.Text}> {this.props.Title}</Text>
                <Text style={styles.descripcion} > {this.props.Descripcion}</Text>
                <Text style={styles.Precio}> {this.props.Price}</Text>
            </View>
     );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: 170,
        height: 200,
        marginVertical: 10,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '80%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth: 3
    },
    Text: {
        textAlign: 'center',
        color: '#CEC045'

    },
    descripcion: {
        textAlign: 'center',
        fontSize: 11

    },
    Precio: {
        textAlign: 'center',
        fontWeight: 'bold'
        
    }
})