import {Button, Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Modal} from "react-native";
import {globalStyles} from "../styles/style";
import {useState} from "react";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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
    const [open, setOpen] = useState(false);

    const isLastItem = (item) => {
        return news.findLastIndex((value) => value === item) === news.length - 1
    }

    const setUnderline = (item) => {
        if (!isLastItem(item)) {
            return styles.underline;
        }
    }

    const toggleModal = () => {
        setOpen(prevState => !prevState);
    }


    return (
        <View style={globalStyles.main}>
            <Text style={[globalStyles.title, styles.header]}>
                News
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
            <View style={styles.iconAdd}>
                <Feather name="plus-circle" size={50} color="black" onPress={toggleModal}/>
            </View>
            <Modal
                visible={open}
                // style={styles.modal}
            >
                <View style={[globalStyles.main, styles.modalContainer]}>
                    <AntDesign name="closecircleo" size={24} color="red" style={styles.modalCloseIcon} onPress={toggleModal} />
                    <Text style={styles.title}>
                        Add article
                    </Text>
                </View>
            </Modal>
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
    iconAdd: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    modalCloseIcon: {
        textAlign: 'right',
        width: '90%'
    },
    // modal: {
    //     opacity: 0.3
    // },
    modalContainer: {
        paddingTop: 10
    }
});
