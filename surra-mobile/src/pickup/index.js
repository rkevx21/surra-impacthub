import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';


class Pickup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>

<TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
        <Text>Pickup</Text>
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
)(Pickup);
