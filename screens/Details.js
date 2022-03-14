import React from 'react'
import { StyleSheet,View, Text,Modal,TouchableHighlight,Image } from 'react-native'
import {useSelector} from 'react-redux';

const Details = ({ navigation:{goBack}}) => {
  // state access in central store
  const {selected} = useSelector(state => state.search)

  return (
    <View>
      
      <Modal
        animationType='fade'
        transparent={false}
        visible={(typeof selected.Title != "undefined")}
       >
         <View style={styles.popup}>
           <Image
             source={{uri:selected.Poster}}
             style={{
               width:'100%',
               height:300,
               marginHorizontal:'auto'
             }}
             resizeMode='cover'
           />
           <Text style={styles.popupTitle}>{selected.Title}</Text>
           <Text style={styles.details}>Rating: {selected.imdbRating}</Text>
           <Text style={styles.details}>Genre: {selected.Genre}</Text>
           <Text style={styles.details}>Director: {selected.Director}</Text>
           <Text style={styles.details}>Cast: {selected.Actors}</Text>
           <Text style={styles.details}>{selected.Plot}</Text>
         </View>
         <TouchableHighlight 
          onPress={()=>goBack()}
         >
           <Text style={styles.closeBtn}>Back</Text>
         </TouchableHighlight>
       </Modal>
    </View>
  )
}
const styles = StyleSheet.create({

popup:{
  flex:1,
  marginBottom:20,
  paddingHorizontal:10,
  width:'100%',
},
details:{
  marginBottom:10,
  fontWeight:'700'
},
popupTitle:{
  fontSize:25,
  fontWeight:'700',
  marginBottom:5
},
closeBtn:{
  padding:20,
  fontSize:20,
  fontWeight:'700',
  backgroundColor:"#2484C4"
},
});

export default Details