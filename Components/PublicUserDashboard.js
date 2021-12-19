import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

import {
    Select,
    VStack,
    CheckIcon,
    NativeBaseProvider,
} from "native-base"

function PublicUserDashboard() {

    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [cnic, setCnic] = useState('');
    const [dob, setDob] = useState('');
    const [member, setMember] = useState('');
    const [income, setIncome] = useState('');
    const [service, setService] = useState("")
    const [image, setImage] = useState(null);
    const [secondimage, setSecondImage] = useState(null);
    const [thirdImage, setThirdImage] = useState(null);




    const register = () => {
        firebase.firestore().collection("form").doc().set({
            name,
            fatherName,
            cnic,
            dob,
            member,
            income,
            service,
            image,
            secondimage,
            thirdImage,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        setName("");
        setFatherName("");
        setCnic("");
        setDob("");
        setMember("");
        setIncome("");
        setService("");
        setImage(null);
        setSecondImage(null);
        setThirdImage(null);
    }



    
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    
    
    const pickImageCnic = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setSecondImage(result.uri);
        }
    };
    
    
    const pickImageThird = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setThirdImage(result.uri);
        }
    };





    function Logout() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert('Logout Successfull!')
            navigation.navigate("LandingPage")

        }).catch((error) => {
            // An error happened.
        });
    }

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={Styles.container}>
                <View style={Styles.headerConatiner}>

                    <Image
                        style={Styles.logo}
                        source={require('../Assets/appLogo.png')}
                    />

                    <Text style={Styles.heading}>Food Help Form:</Text>

                    <Button
                        title="Logout"
                        color="#3895d3"
                        type="outline"
                        onPress={Logout}
                    />

                    <Input
                        placeholder='Enter Name'
                        value={name}
                        onChangeText={text => setName(text)}
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='#3895d3'
                            />
                        }
                    />
                    <Input
                        placeholder='Enter Father Name'
                        value={fatherName}
                        onChangeText={text => setFatherName(text)}
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='#3895d3'
                            />
                        }
                    />
                    <Input
                        placeholder='Enter  CNIC number'
                        value={cnic}
                        onChangeText={text => setCnic(text)}
                        leftIcon={
                            <Icon
                                name='id-card'
                                size={24}
                                color='#3895d3'
                            />
                        }
                    />
                    <Input
                        placeholder='Enter  Date of Birth'
                        value={dob}
                        onChangeText={text => setDob(text)}
                        leftIcon={
                            <Icon
                                name='child'
                                size={24}
                                color='#3895d3'
                            />
                        }
                    />
                    <Input
                        placeholder='Enter Number of Family member'
                        value={member}
                        onChangeText={text => setMember(text)}
                        leftIcon={
                            <Icon
                                name='home'
                                size={24}
                                color='#3895d3'
                            />
                        }
                    />
                    <Input
                        placeholder='Enter Monthly Income'
                        value={income}
                        onChangeText={text => setIncome(text)}
                        leftIcon={
                            <Icon
                                name='credit-card'
                                size={24}
                                color='#3895d3'
                            />
                        }
                    />
                    <NativeBaseProvider>
                        <View style={{ margin: 10 }}>
                            <VStack alignItems="center" space={4}>
                                <Select
                                    selectedValue={service}
                                    minWidth="200"
                                    accessibilityLabel="Choose Service"
                                    placeholder="Choose Service"
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />,
                                    }}
                                    mt={1}
                                    onValueChange={(itemValue) => setService(itemValue)}
                                >
                                    <Select.Item label="Monthly Ration" value="Monthly Ration" />
                                    <Select.Item label="Daily 1 time food" value="Daily 1 time food" />
                                    <Select.Item label="Daily 2 time food" value="Daily 2 time food" />
                                    <Select.Item label="Daily 3 time food" value="Daily 3 time food" />
                                </Select>
                            </VStack>
                        </View>
                    </NativeBaseProvider>

                    <View style={Styles.imagediv}>

                        <Button
                            style={{ paddingBottom: 30 }}
                            color="#3895d3"
                            type="outline"
                            onPress={pickImage}
                            icon={
                                <Icon
                                    style={Styles.image}
                                    name="camera"
                                    size={15}
                                    color="#3895d3"
                                />
                            }
                            title="Applicant image"
                        />
                        <Button
                            color="#3895d3"
                            type="outline"
                            onPress={pickImageCnic}
                            icon={
                                <Icon
                                style={Styles.image}
                                name="camera"
                                size={15}
                                    color="#3895d3"
                                    />
                            }
                            title="Applicant CNIC Front Image"
                        />
                        <Button
                            color="#3895d3"
                            type="outline"
                            onPress={pickImageThird}
                            icon={
                                <Icon
                                style={Styles.image}
                                name="camera"
                                size={15}
                                color="#3895d3"
                                    />
                                }
                                title="Applicant CNIC Back Image"
                                />
                    </View>


                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    {secondimage && <Image source={{ uri: secondimage }} style={{ width: 200, height: 200 }} />}
                    {thirdImage && <Image source={{ uri: thirdImage }} style={{ width: 200, height: 200 }} />}


                    <Button
                        title="Submit Form"
                        color="#3895d3"
                        type="outline"
                        onPress={register}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default PublicUserDashboard;


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
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
    logo: {
        padding:15,
        width: '50%',
        height: 150,
    },
    image: {
        padding: 5,
    },
    imagediv: {
        width: '100%',
        marginBottom: 20,
    },
    btnmain: {
        margin: 15,
    },
})

