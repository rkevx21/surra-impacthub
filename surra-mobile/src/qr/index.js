import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Picker,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import {connect} from 'react-redux';

class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {date: ""}
  }

  render() {
    return (
      <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
          <Image source={require('../../assets/qr.png')} style={{height:300, width:300}} />
          <Text style={{fontSize:30}}>Scan Me</Text>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Dashboard')}>
            <Text style={{fontSize:20, paddingVertical:30}}>Done</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  pickup: state.Pickup,
  paperCount: state.Recyclables.paperCount,
  glassCount: state.Recyclables.glassCount,
  plasticCount: state.Recyclables.plasticCount,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QR);
