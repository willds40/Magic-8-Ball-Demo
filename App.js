import React, { useEffect, useState } from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import getResponse from './responses';
import style from './styles'

export default function App() {
    return (
        <View style={style.titleView}>
            <Text style={style.title}>Maigc 8 Ball</Text>
        </View>
    );
}