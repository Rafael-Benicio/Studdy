import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View , ImageBackground, ImageBackgroundBase, Text} from 'react-native';

import styles from './styles';

import giveClassesBgImage from '../../asset/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
    const navigation=useNavigation();

    function handleNavegateBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
            resizeMode='contain' 
            source={giveClassesBgImage} 
            style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como um professor na nossa plataforma wev.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavegateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
};

export default GiveClasses;
