import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function LoginPage() {


    function register() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert("Login successfull!")
                navigation.navigate("PublicUser")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
            setEmail('')
            setPassword('')
            
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <View style={Styles.conatiner}>
            <View style={Styles.headerConatiner}>
                <Image
                    style={Styles.logo}
                    source={require('../Assets/appLogo.png')}
                />
                <Text style={Styles.heading}>Login:</Text>
                <Input
                    style={Styles.inputText}
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    leftIcon={
                        <Icon
                            name='envelope'
                            size={24}
                            color='#3895d3'
                        />
                    }
                />
                <Input
                    style={Styles.inputText}
                    secureTextEntry={true}
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='#3895d3'
                        />
                    }
                />
                <Button
                    title="Submit"
                    color="#3895d3"
                    type="outline"
                    onPress={register}

                />
            </View>
            <View style={Styles.bottomdiv}>
                 <Text>Not a member?</Text><Text onPress={ () => navigation.navigate("Register")} style={Styles.link}>Register</Text>
            </View>

        </View>
    );
}



const Styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
    },
    headerConatiner: {
        alignItems: 'center',
        marginBottom: 10,
    },
    heading: {
        fontSize: 35,
        color: '#3895d3'
    },
    inputText: {
        paddingLeft: 10,
        fontSize: 20,
    },
    bottomdiv: {
        marginTop: 20,
        flexDirection: 'row',
        width : '100%',
        justifyContent: 'center'
    },

    link: {
        paddingLeft: 10,
        color: '#3895d3',
        textAlign: 'center'
    },
    logo: {
        width:'50%',
        height: 100,
    }
})