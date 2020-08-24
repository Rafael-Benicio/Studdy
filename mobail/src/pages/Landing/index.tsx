import React from 'react';
import { View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';

import landingImg from '../../asset/images/landing.png';
import studyIcon from '../../asset/images/icons/study.png';
import giveClasses from '../../asset/images/icons/give-classes.png'
import heartIcon from '../../asset/images/icons/heart.png'

function Landing(){
    const navigation=useNavigation();

    function handleNavigationToGiveClasses(){
        navigation.navigate('GiveClasses');
    }

    function handleNavigationToStudyPage(){
        navigation.navigate('Study')
    }

    return(
    <View style={styles.container}>
        <Image source={landingImg} style={styles.banner}/>
        <Text style={styles.title}>
            Seja Bem-Vindo, {'\n'}
            <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>
        <View style={styles.buttonContainer}>
            <RectButton 
            onPress={handleNavigationToStudyPage} 
            style={[styles.button, 
            styles.buttonPrimary]}>
                <Image source={studyIcon}/>

                <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>

            <RectButton
            onPress={handleNavigationToGiveClasses} 
            style={[styles.button, styles.buttonSecundary]}>

                <Image source={studyIcon}/>

                <Text style={styles.buttonText}>Dar Aula</Text>
            </RectButton>
        </View>

        <Text style={styles.totalConnections}>
            Total de 285 conexões realizadas{'   '}
            <Image source={heartIcon}/>
        </Text>
    </View>
    );
}

export default Landing;