import React from 'react';
import { Text as RNText } from 'react-native'
import PropsTypes from 'prop-types';

export class Typography extends React.Component {
    render(){
        return(
            <RNText style={{
                color: this.props.color,
                fontSize: this.props.fontSize
            }}>
                { this.props.children }
            </RNText>
        )
    }
}

Typography.PropsTypes ={
    color: PropsTypes.string,
    fontSize: PropsTypes.number.isRequired,
    children: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.string]).isRequired
}