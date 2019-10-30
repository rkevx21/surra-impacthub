import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor:'#A4B73B', flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={{height:'50%', justifyContent:'space-between'}}>
        <Image source={require('../../assets/surra.png')} />
        <View style={{alignItems:'center'}}>
        <TouchableOpacity
          style={{marginBottom: 10, width: 150, height: 48, backgroundColor: '#456199', justifyContent:'center', alignContent:'center', borderRadius:5}}
          onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Text style={{color: '#fff', textAlign:'center'}}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 150, height: 48, backgroundColor: '#fff', justifyContent:'center', alignContent:'center', borderRadius:5}}
          onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Text style={{color: '#000', textAlign:'center'}}>Sign in with Google</Text>
        </TouchableOpacity>
        </View>
        
        </View>
        
      </View>
    );
  }
}

const mapStateToProps = state => ({
  pickup: state.Pickup,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
