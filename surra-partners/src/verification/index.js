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

class Verification extends Component {
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
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Verify
          </Text>
          <View style={{marginTop:20}}>
            <Text>Date: {this.props.items[this.props.currentIndex].date}</Text>
            <Text>Transaction Number: {this.props.items[this.props.currentIndex].transactionNumber}</Text>
            <Text>Transaction Number: {this.props.items[this.props.currentIndex].authorizedPerson}</Text>
          </View>
        <View>


            <Text style={{color:'#fff', fontWeight:'bold', marginTop:50}}>Items</Text>

        </View>
        <View style={{height:400}}>
        <FlatList data={this.props.items[this.props.currentIndex].items} renderItem={({item, index}) =>{
          return <View style={{paddingVertical:10}}>
            <Text>Type: {item.name}</Text>
            <Text>Measurement: </Text>
            <View style={{flexDirection:'row', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#fff'}}>
              <TextInput value={item.measurement + ""}  style={{flex:1}}/>
              <Text>{item.unit}</Text>
            </View>
            
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
              this.props.navigation.navigate('PickupPoint')
            }>
            <Text style={{color: '#fff', padding: 15}}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  pickup: state.Pickup,
  items: state.PickupPoint.items,
  currentIndex: state.PickupPoint.currentIndex
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verification);
