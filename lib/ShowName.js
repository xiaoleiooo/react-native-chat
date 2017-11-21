/**
 * Created by rain on 2017/11/21.
 */
import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    ViewPropTypes,
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
    Easing,
    Keyboard
} from 'react-native';

class ShowName extends Component{

    render(){
        return (
            <View style={{width:'100%',height:50,justifyContent:'center',alignContent:'center'}}>
                <Text>{this.props.name||'no name!'}</Text>
            </View>
        );
    }
}

export default ShowName;