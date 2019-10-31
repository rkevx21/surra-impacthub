import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Picker,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {onAdd} from '../recyclables/actions';
import RecyclableTypes from '../recyclables/recyclableTypes'; 

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {type: null, address:null, measurement: null};
  }

  render() {
    return (
      <View
        style={{backgroundColor: '#A4B73B', flex: 1, paddingHorizontal: 30, paddingTop:100, justifyContent:'space-between'}}>
          <View>
          <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Add Item</Text>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            paddingVertical: 10,
            marginTop:20
          }}>
          <Picker onValueChange={(value) =>{
            this.setState({type: value})
          }}>
            <Picker.Item label="Select Type" value={null}/>
            <Picker.Item label="Plastic" value={RecyclableTypes.PLASTIC}/>
            <Picker.Item label="Paper" value={RecyclableTypes.PAPER} />
            <Picker.Item label="Glass" value={RecyclableTypes.GLASS} />
          </Picker>
        </View>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <Picker>
            <Picker.Item label="123 St. Barangay, City" />
            <Picker.Item label="456 St. Barangay, City" />
            <Picker.Item label="789 St. Barangay, City" />
          </Picker>
        </View>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <TextInput placeholder="No. of pieces" />
        </View>
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
            onPress={() =>{
              this.props.add({type: this.state.type, item:''});
              this.props.navigation.goBack();
            }
              
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

const mapDispatchToProps = {
  add: payload => onAdd(payload)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItem);
