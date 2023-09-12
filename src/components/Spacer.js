import React from 'react';
import { View } from 'react-native';

export class Spacer extends React.Component{
    render(){
        if(this.props.horizontal){
            return(
                <View style={{ marginLeft: this.props.space }}/>
            )
        }
        return(
            <View style={{ marginTop: this.props.space }}/>
        )
    }
}