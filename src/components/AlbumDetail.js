import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ record }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = record;
    const { 
        thumbnailContainerStyle, 
        thumbnailStyle,
        imageStyle, 
        textContainerStyle,
        headerTextStyle } = styles;
    return (
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={textContainerStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(url)} text='Buy it' />
        </CardSection>
    </Card>);
};

const styles = {
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;
