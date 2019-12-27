import React, { useEffect, useState } from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import {getResponse} from './responses';
import style from './styles'

const App = () => {
    const [text, setState] = useState("");
    return (
        <React.Fragment>
            <View style={style.titleView}>
                <Text style={style.title}>Maigc 8 Ball</Text>
            </View>
            <ImageBackground
                style={style.imageBackground}
                source={require('./assets/triangle-1.png')}
            >
                <View style={style.textView}>
                    <Button
                        title="Click Me"
                        color="black"
                        testID="response-button"
                        onPress={(() => {
                            setState(getResponse())
                        })}
                    >
                    </Button>
                    <Text testID="response-text" style={style.response}>{text}</Text>
                </View>
            </ImageBackground>
        </React.Fragment>
        
    );
}

export default App;