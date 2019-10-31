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

class Map extends Component {
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
          justifyContent: 'space-between',
        }}>

          <Image source={require('../../assets/map.jpg')}  style={{marginHorizontal:-40, flex:1}}/>

          <View style={{marginTop:20}}>
            <Text style={{color:'#fff'}}>Transaction Number: {this.props.items[this.props.currentIndex].transactionNumber}</Text>
            <Text style={{color:'#fff'}}>Authorized Person: {this.props.items[this.props.currentIndex].authorizedPerson}</Text>
            <FlatList data={this.props.items[this.props.currentIndex].items} renderItem={({item,index}) =>{
              return <View>
                <Text style={{color:'#fff'}} >{item.name} : {item.measurement} {item.unit}</Text>
  
              </View>
            }} />
          </View>
          <View style={{paddingVertical: 30}}>
          <TouchableOpacity
            style={{
              width: '100%',
              borderRadius: 5,
              backgroundColor: '#265D0C',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              this.props.navigation.navigate('Verification')
            }>
            <Text style={{color: '#fff', padding: 15}}>Arrived</Text>
          </TouchableOpacity>
        </View>

 

      </View>
    );
  }
}

const mapStateToProps = state => ({
  pickupPoints: state.PickupPoint,
  items: state.PickupPoint.items,
  currentIndex: state.PickupPoint.currentIndex
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
