import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Picker,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {onSelect} from './actions';

class PickupPoints extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let map = () =>{
      if(this.props.currentIndex == '0' ){
        return require('../../assets/map.jpg');
      }
      if(this.props.currentIndex == '1'){
        return require('../../assets/map2.jpg');
      }
      if(this.props.currentIndex == '2'){
        return require('../../assets/map3.png');
      }
    }; 
    return (
      <View style={{backgroundColor: '#A4B73B', flex: 1}}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{color: '#fff', padding: 20}}>Logout</Text>
        </TouchableOpacity>
        <View
          style={{
            flex:1,
            paddingHorizontal: 30,
            justifyContent: 'space-between',
          }}>
         
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Pick Up
            </Text>

            <View style={{marginTop: 20}}>
              <Text style={{color: '#fff'}}>
                Transaction Number:{' '}
                {this.props.items[this.props.currentIndex].transactionNumber}
              </Text>
              <Text style={{color: '#fff'}}>
                Authorized Person:{' '}
                {this.props.items[this.props.currentIndex].authorizedPerson}
              </Text>
              <FlatList
                data={this.props.items[this.props.currentIndex].items}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <Text style={{color: '#fff'}}>
                        {item.name} - {item.measurement} {item.unit}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <Image
              source={map()}
              style={{marginHorizontal: -40, height: 200, marginVertical: 20}}
            />

            <Text style={{color: '#fff', fontWeight: 'bold', marginTop: 20}}>
              Pickup Points
            </Text>
            <View style={{height: 200}}>
              <FlatList
                data={this.props.pickupPoints.items}
                keyExtractor={(item, index) => {
                  return index + '';
                }}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        this.props.select(index);
                      }}
                      style={{
                        borderBottomColor: '#849524',
                        borderBottomWidth: 1,
                        paddingVertical: 20,
                      }}>
                      <Text style={{color: '#fff'}}>Date: {item.date}</Text>
                      <Text style={{color: '#fff'}}>
                        Transaction Number: {item.transactionNumber}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
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
                onPress={() => this.props.navigation.navigate('Map')}>
                <Text style={{color: '#fff', padding: 15}}>Accept</Text>
              </TouchableOpacity>
            </View>
     
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  pickupPoints: state.PickupPoint,
  items: state.PickupPoint.items,
  currentIndex: state.PickupPoint.currentIndex,
});

const mapDispatchToProps = {
  select: payload => onSelect(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PickupPoints);
