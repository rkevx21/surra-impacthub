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
import {onDone} from '../pickup-points/actions';

class Success extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: '#A4B73B',
          flex: 1,
          paddingHorizontal: 30,
          justifyContent: 'center',
        }}>

          <Text style={{color:'#fff', fontSize:30, textAlign:'center'}}>Success!</Text>

          <Text style={{color:'#fff', fontSize:20, textAlign:'center'}}>Thank you for doing business with us.</Text>

          <TouchableOpacity onPress={() =>{
            this.props.done(this.props.currentIndex);
            this.props.navigation.navigate('PickupPoint');
            }} style={{backgroundColor:'#fff', width:150, borderRadius: 5, alignSelf:'center', marginVertical:20}}>
            <Text style={{textAlign:'center', color:'#000', padding:10}}>Go back to home</Text>
          </TouchableOpacity>
 

      </View>
    );
  }
}

const mapStateToProps = state => ({
  pickupPoints: state.PickupPoint,
  items: state.PickupPoint.items,
  currentIndex: state.PickupPoint.currentIndex
});

const mapDispatchToProps = {
  done: payload => onDone(payload)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Success);
