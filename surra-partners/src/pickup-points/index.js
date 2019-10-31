import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Picker,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';

class PickupPoints extends Component {
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
          paddingTop: 100,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Pick Up
          </Text>

          <View style={{marginTop:20}}>
            <Text style={{color:'#fff'}}>Transaction Number: {this.props.items[this.props.currentIndex].transactionNumber}</Text>
            <Text style={{color:'#fff'}}>Authorized Person: {this.props.items[this.props.currentIndex].authorizedPerson}</Text>
            <FlatList data={this.props.items[this.props.currentIndex].items} renderItem={({item,index}) =>{
              return <View>
                <Text style={{color:'#fff'}} >{item.name} - {item.measurement} {item.unit}</Text>
  
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
              this.props.navigation.goBack()
            }>
            <Text style={{color: '#fff', padding: 15}}>Accept</Text>
          </TouchableOpacity>
        </View>

            <Text style={{color:'#fff', fontWeight:'bold', marginTop:50}}>Pickup Points</Text>
          <FlatList
            data={this.props.pickupPoints.items}
            keyExtractor={(item, index) => {
              return index + '';
            }}
            renderItem={({item, index}) => {
              return (
                <View style={{borderBottomColor:'#849524', borderBottomWidth:1, paddingVertical:20}}>
                  <Text style={{color:'#fff'}}>Date: {item.date}</Text>
                  <Text  style={{color:'#fff'}}>Transaction Number: {item.transactionNumber}</Text>
                </View>
              );
            }}
          />
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
)(PickupPoints);
