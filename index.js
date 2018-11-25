import React from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//rallycoding.herokuapp.com/api/music_albums
const App = () => 
     (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );

AppRegistry.registerComponent('albums', () => App);
