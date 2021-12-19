import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase";
import { useEffect,useState } from "react";

function UserStatus() {

    const [data, setData] = useState([]);

    function GetData() {

        firebase.firestore().collection("form").get().then((querySnapshot) => {
            setData([])
            querySnapshot.forEach((doc) => {
                setData(data => [...data, doc.data()])
                data.push(doc.data());
            });
        });

    }

    useEffect(() => {
        GetData()
    })

    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.heading}>Khana Sab Ka Liya </Text>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={styles.headerConatiner}>
                                <Text style={{ fontSize: 25, color: '#3895d3', textAlign: "center", }}>Approval Card: </Text>
                                <Input style={{ color: '#3895d3' }}
                                    label='Name:'
                                    defaultValue= {item.name}
                                    disabled
                                />
                                <Input
                                    style={{ color: '#3895d3' }}
                                    label='Father Name:'
                                    defaultValue={item.fatherName}
                                    disabled
                                />
                                <Input
                                    style={{ color: '#3895d3' }}
                                    label='CNIC Number:'
                                    defaultValue={item.cnic}
                                    disabled
                                />
                                <Input
                                    style={{ color: '#3895d3' }}
                                    label='Date of Birth:'
                                    defaultValue= {item.dob}
                                    disabled
                                />
                            </View>

                        );
                    })
                }


            </View>
        </ScrollView>
    );

}

export default UserStatus;

const styles = StyleSheet.create({
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
        textTransform: "uppercase",
        fontSize: 35,
        color: '#3895d3',
        textAlign: "center",
        padding: 15,
    },
});
