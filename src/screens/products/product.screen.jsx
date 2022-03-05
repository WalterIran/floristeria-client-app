import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import MenuItem from '../../components/MenuItem';


export default class App extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>



                <View style={{ width: '100%' }}>
                    <Image
                        source={require('../../assets/Interflorainicio.jpg')}
                        style={{ width: '100%', resizeMode: 'contain' }} />

                    <Image
                        source={require('../../assets/Image2.jpg')}
                        style={{ width: '100%', resizeMode: 'contain', top: -6 }} />

                    <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#fff', position: 'absolute', right: 0, left: 0, top: 140, bottom: 0 }} >El amor nos conecta</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'semi bold', textAlign: 'center', color: '#fff', position: 'absolute', right: 0, left: 0, top: 180, bottom: 0 }} >Interflora nos une, díselo con flores</Text>
                </View>

                <View style={{}}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>___________            ___________</Text>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', top: -30 }}>Boda</Text>
                </View>

                <View style={styles.menuContainer}>

                    <MenuItem itemImage={require('../../assets/Girasoles.png')} />
                    <MenuItem itemImage={require('../../assets/Girasoles.png')} />
                    <MenuItem itemImage={require('../../assets/Girasoles.png')} />
                    <MenuItem itemImage={require('../../assets/Girasoles.png')} />
                </View>

                <View style={{}}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', top: 24 }}>________                       ________</Text>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', top: -5 }}>San Valentin</Text>
                </View>

                <View style={styles.menuContainer}>
                <MenuItem itemImage={require('../../assets/carruzel1.png')} />
                <MenuItem itemImage={require('../../assets/carruzel1.png')} />
                <MenuItem itemImage={require('../../assets/carruzel1.png')} />
                <MenuItem itemImage={require('../../assets/carruzel1.png')} />
                </View>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }

});