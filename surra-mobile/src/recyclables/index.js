import React, {Component} from 'react';
import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';


class Recyclables extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
        <Text>Recyclables</Text>
        </TouchableOpacity>
        
      </ScrollView>
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
)(Recyclables);
