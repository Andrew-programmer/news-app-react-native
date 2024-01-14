import {Button, Image, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/style";
import {SafeAreaView} from "react-native-safe-area-context";

export const FullInfo = ({route}) => {

    // const navigateBack = () => {
    //     navigation.goBack();
    // }

    return (
        <SafeAreaView style={globalStyles.main}>
            <Image source={{
                width: 350,
                height: 200,
                uri: route.params.img
            }}/>
            <Text style={globalStyles.title}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-regular',
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
        color: '#474747'
    }
});