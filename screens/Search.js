import React,{useState} from 'react'
import { StyleSheet,Text, View,TextInput,ScrollView,TouchableHighlight,Image } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import { getMovies, movieDetails } from '../reducers/SearchReducer'

const Search=({navigation:{navigate}})=> {

    const [search, setsearch] = useState("")
    const dispatch = useDispatch()
    const {results,loading} = useSelector(state => state.search)
    
    const handleSearch = (query)=>{
        
            dispatch(getMovies(query))
    }

    const handleDetails = (id)=>{

        dispatch(movieDetails(id))
        navigate('Details')
       
    }
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Movies Application</Text>
    
      <TextInput 
       style={styles.searchText}
  
       onChangeText = {text => setsearch(text) }
       onSubmitEditing={()=>handleSearch(search)}
       placeholder="Enter movie name"
       value={search}
       />
       {
           loading && <Text style={styles.loading}>Loading!..</Text>
       }

       <ScrollView style={styles.result}>

         {
           search == ""? <Text style={styles.loading}>No results</Text>:  
           results.map(item=>(
             <TouchableHighlight key={item.imdbID}onPress={()=>handleDetails(item.imdbID)}>
               <View style={styles.results}>
               <Image
                source={{uri:item.Poster}}
                style={{
                  width:'100%',
                  height:300,
                  marginHorizontal:'auto'
                }}
                resizeMode='cover'
               />
               <Text style={styles.heading}>
                 {
                   item.Title
                 }
               </Text>
             </View>
             </TouchableHighlight>
             
           ))
         }
       </ScrollView>
      </View>
    )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems:'center',
    paddingHorizontal:20,
    justifyContent: 'flex-start',
    paddingTop:70,
    backgroundColor: '#223343',
  },
    title:{
      textAlign:'center',
      marginBottom:20,
      fontWeight:'600',
      color: '#FFF',
      fontSize:30
    },
    loading:{
      textAlign:'center',
      fontWeight:'100',
      color: '#FFF',
      fontSize:20
    },
    searchText:{
      padding:20,
      width:'100%',
      marginBottom:40,
      backgroundColor:'#FFF',
      fontWeight:'300',
      fontSize:20
    },
    result:{
      flex:1,
      marginBottom:20,
      width:'100%'
    },
    heading:{
      color:'#FFF',
      fontSize:20,
      padding:20,
      backgroundColor:'#445565',
      fontWeight:'800'
    },
  });
  
export default Search
