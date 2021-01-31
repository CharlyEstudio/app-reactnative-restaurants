import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ListItemsOrder({ listOrder, modifyQuantityItem }) {
    return (
        <FlatList
            data={listOrder}
            renderItem={({item, index}) => (
                <View style={styles.viewItem}>
                    <View style={styles.itemId}>
                        <Text style={styles.id}>{(index + 1)}</Text>
                    </View>
                    <View style={styles.itemDescription}>
                        <Text style={styles.titleItem}>{item.product}</Text>
                        <Text style={styles.subTitleItem}>Precio $ {item.price} MXN</Text>
                        <Text style={styles.subTitleItem}>Cantidad {item.quantity} {item.quantity > 0 ? 'pzs' : 'pz'}</Text>
                        <Text style={styles.subTitleItem}>Subtotal $ {item.subtotal} MXN</Text>
                    </View>
                    <View style={styles.viewButtons}>
                        <Icon
                            reverse
                            size={13}
                            type="material-community"
                            name="plus"
                            color="blue"
                            onPress={() => modifyQuantityItem(item, 1)}
                        />
                        <Icon
                            reverse
                            size={13}
                            type="material-community"
                            name="minus"
                            color="orange"
                            onPress={() => modifyQuantityItem(item, -1)}
                        />
                        <Icon
                            reverse
                            size={13}
                            type="material-community"
                            name="delete"
                            color="red"
                            onPress={() => console.log('Eliminar')}
                        />
                    </View>
                </View>
            )}
            keyExtractor={item => item.idProduct.toString()}
        />
    )
}

const styles = StyleSheet.create({
    viewItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    itemId: {
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    id: {
        fontWeight: 'bold',
        fontSize: 12
    },
    itemDescription: {
        flex: 5,
    },
    titleItem: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitleItem: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'gray'
    },
    viewButtons: {
        flex: 3,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        backgroundColor: 'transparent'
    }
});