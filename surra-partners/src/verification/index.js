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
        <View>


            <Text style={{color:'#fff', fontWeight:'bold', marginTop:50}}>Items</Text>
          <FlatList
            data={null}
            keyExtractor={(item, index) => {
              return index + '';
            }}
            renderItem={({item, index}) => {
              return (
                <View style={{borderBottomColor:'#849524', borderBottomWidth:1, paddingVertical:20}}>
                  <Text style={{color:'#fff'}}>Type: {item.type}</Text>
                  <Text  style={{color:'#fff'}}>Weight: {item.weight}</Text>
                </View>
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
            onPress={() =>
              this.props.navigation.goBack()
            }>
            <Text style={{color: '#fff', padding: 15}}>Submit</Text>
          </TouchableOpacity>
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
)(Verification);
