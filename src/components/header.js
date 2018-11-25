import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8f8',
        justifyContent: 'center', //vertical position: flex-start, center, flex-end
        alignItems: 'center', //horizon position: flex-start, center, flex-end
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;

