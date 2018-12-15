import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={() => console.log('clicked')}>
            <Text style={textStyle}>Click me!!</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5
    }
};
export default Button;
