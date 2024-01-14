import {Button, Text, View, TouchableOpacity, FlatList, Image, StyleSheet} from "react-native";
import {globalStyles} from "../styles/style";
import {useState} from "react";
import {withDevTools} from "expo/build/launch/withDevTools";

const newsInit = [
    {
        name: 'Google',
        anons: 'Google!!!!',
        full: 'Google is cool',
        img: 'https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        key: '1'
    },
    {
        name: 'Apple',
        anons: 'Apple!!!!',
        full: 'Apple is cool',
        img: 'https://images.unsplash.com/photo-1705123942829-0d4733f8bd89?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        key: '2'
    },
    {
        name: 'Facebook',
        anons: 'Facebook!!!!',
        full: 'Facebook is cool',
        img: 'https://images.unsplash.com/photo-1705077111154-94a4a210461e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        key: '3'
    }
];




export const Main = ({navigation}) => {
    const [news, setNews] = useState(newsInit);

    const isLastItem = (item) => {
        return news.findLastIndex((value) => value === item) === news.length - 1
    }

    const setUnderline = (item) => {
        if (!isLastItem(item)) {
            return styles.underline;
        }
    }

    return (
        <View style={globalStyles.main}>
            <Text style={[globalStyles.title, styles.header]}>
                Main Page
            </Text>
            <FlatList scrollEnabled={true} showsVerticalScrollIndicator={false} data={news} renderItem={({item}) => (
                <TouchableOpacity style={[styles.item, setUnderline(item)]} onPress={() => navigation.navigate('Fullinfo', item)}>
                    <Image source={{
                        width: 350,
                        height: 200,
                        uri: item.img
                    }}/>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30,
        paddingBottom: 10
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: "center",
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-regular',
        fontSize: 16,
        textAlign: "center",
        marginTop: 5,
        color: '#474747'
    },
    underline: {
        borderBottomWidth: 0.5
    },
});
