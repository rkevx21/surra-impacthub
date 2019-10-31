import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#A4B73B',
          flex: 1,
          justifyContent: 'space-between',
          paddingVertical: 50,
        }}>
          <View style={{alignSelf:'flex-end', marginRight:40}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
            <Text style={{color:'#fff'}}>Logout</Text>
          </TouchableOpacity>
          </View>
         
           <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')}>
        <View style={{alignItems: 'center'}}>
         
          <Image
            source={require('../../assets/ira.jpeg')}
            style={{width: 66, height: 66, borderRadius: 33, marginBottom:10}}
          />
          <Text style={{color: '#fff'}}>Ira Allison Dimco</Text>
          
        </View>
        </TouchableOpacity>

        <View style={{alignItems:'center'}}>
          <Text style={{color: '#fff'}}>183 Points</Text>
          <TouchableOpacity>
            <Text style={{color: '#fff'}}>Use Credits</Text>
          </TouchableOpacity>
        </View>

        <PercentageCircle borderWidth={5} radius={90} percent={this.props.percentage} color={"#265D0C"} innerColor='#A4B73B' bgcolor='#849524' textStyle={{color:'#fff', fontSize:65}} ></PercentageCircle>
        <View>
          <Text style={{color: '#fff'}}>Accumulated</Text>
        </View>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('TransactionHistory')}>
          <Text style={{color: '#fff'}}>View Transactions</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: '65%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderColor: '#849524',
              borderWidth: 1,
            }}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 30}}>
                {this.props.plasticCount}
              </Text>
              <Text style={{textAlign: 'center', color: '#fff'}}>Plastics</Text>
            </View>
          </View>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderColor: '#849524',
              borderWidth: 1,
            }}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 30}}>
                {this.props.glassCount}
              </Text>
              <Text style={{textAlign: 'center', color: '#fff'}}>Glass</Text>
            </View>
          </View>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderColor: '#849524',
              borderWidth: 1,
            }}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 30}}>
                {this.props.paperCount}
              </Text>
              <Text style={{textAlign: 'center', color: '#fff'}}>Papers</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('AddItem')}
            style={{
              borderRadius: 5,
              backgroundColor: '#265D0C',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', padding:15}}>+ Add Items</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Pickup')}>
            <Text
              style={{color: '#fff', textAlign: 'center', paddingVertical: 20}}>
              Request for pickup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  pickup: state.Pickup,
  plasticList: state.Recyclables.plasticList,
  paperList: state.Recyclables.paperList,
  glassList: state.Recyclables.glassList,
  glassCount: state.Recyclables.glassCount,
  plasticCount: state.Recyclables.plasticCount,
  paperCount: state.Recyclables.paperCount,
  percentage: state.Recyclables.percentage,
  recyclables: state.Recyclables

});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
