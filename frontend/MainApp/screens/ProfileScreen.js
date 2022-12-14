import * as Reach from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Info from './ProfileComponents/Info';
import Edit from './ProfileComponents/Edit';
import Posting from './GeneralComponents/Posting';
import Posting2 from './GeneralComponents/Posting';
import Posting3 from './GeneralComponents/Posting';
import Posting4 from './GeneralComponents/Posting';
import Add from './ProfileComponents/Add';
import {Postings} from './ProfileComponents/DummyPostData/Postings'

export default function ProfileScreen({navigation}) {
    return (


    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source = {require('./ProfileComponents/man.png')} style= {styles.Image} />

        <View style={{alignself: 'center'}}>
          <View style={styles.Info}>
            <Info />
          </View>

          <View style={styles.Button}>
            <Add/>
          </View>

          <View style={styles.Button}>
            <Edit/>
          </View>

        {/* <Text onPress={() => alert('this is the Profile Screen')}>ProfileScreen</Text> */}

          <View style={styles.PostingContainer}>
            {Postings.map((posting,index) => (
              <Posting posting = {posting} key = {index} />
              // <Posting posting2 = {posting} key = {index} />,
              // <Posting posting3 = {posting} key = {index} />,
              // <Posting posting4 = {posting} key = {index} />


            ))}
            



          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    height:'100%'
  },

  Image: {
    marginTop: -90,
    width: 40,
    resizeMode: 'contain',
    left:45,
    position: 'absolute',
  },

  Info:{
    top: 100,
    alignself: 'center'

  },

  PostingContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    top: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },

  Button: {
    left: 300,
    marginTop: 5
  }


})