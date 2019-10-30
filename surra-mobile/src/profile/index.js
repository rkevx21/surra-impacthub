import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {connect} from 'react-redux';


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{backgroundColor: '#A4B73B', flex: 1, paddingHorizontal: 30, paddingTop:100, justifyContent:'space-between'}}>
          
          <View>
          <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Profile</Text>

          <Text style={{color:'#fff', fontWeight:'bold', marginTop:50}}>Personal Information</Text>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <TextInput placeholder="Name" value={this.props.profile.name} />
        </View>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <TextInput placeholder="Birthday" value={this.props.profile.birthday} />
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:50}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>Addresses</Text>
          <TouchableOpacity style={{
            borderRadius:5,
            backgroundColor: '#265D0C',
              justifyContent: 'center',
              alignItems: 'center',}}>
            <Text style={{padding:5, color:'#fff'}}>Add New</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList data={this.props.profile.addresses} renderItem={({item,index}) => {
          return <View style={{borderBottomColor:'#849524', borderBottomWidth:1}}>
            <Text style={{paddingVertical: 20}}>{item.address}</Text>
          </View>
        } } />
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
            <Text style={{color: '#fff', padding: 15}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.Profile,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
