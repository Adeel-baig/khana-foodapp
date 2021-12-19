import React from "react";
import { View, StyleSheet, Text,Styles } from "react-native";
import { Button } from "react-native-elements";

export default function Branch() {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.heading}>Options:</Text>
            <View style={styles.btnconatiner}>
                <Button
                    title="Verify Via serial number"
                    type="outline"
                />
            </View>

            <View style={styles.btnconatiner}>
                <Button
                    title="Verify Via QR code"
                    type="outline"
                />
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    conatiner: {

    },
    btnconatiner: {
        padding: 10,
    },

    heading: {
        fontSize: 35,
        color: '#3895d3',
        textAlign: "center",
        padding: 15,
    },
})