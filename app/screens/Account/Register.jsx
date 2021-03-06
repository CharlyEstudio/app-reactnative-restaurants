import React, { useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Components
import ToastGlobal from '../../components/ToastGlobal';
import RegisterForm from '../../components/Account/RegisterForm';

export default function Register() {
    const toastRef = useRef();

    return (
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../assets/img/building-place.jpg')}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.viewForm}>
                <RegisterForm toastRef={toastRef} />
            </View>
            <ToastGlobal toastRef={toastRef} />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewForm: {
        marginRight: 40,
        marginLeft: 40
    }
})
