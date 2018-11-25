import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => (
        <View>
            <Text>{props.record.title}</Text>
        </View>
    );

export default AlbumDetail;
