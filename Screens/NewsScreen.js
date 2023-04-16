import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "../Components/SingleNews";

 


const NewsScreen = () => {
  const {
     news: {articles} 
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState() //track current iteam Active on this
  const windowHeight = Dimensions.get("window").height // geting the dimensions of window or screen height

   //if articles are preseent then carousel
  return (
    <View style={styles.carousel}>
      
      {articles && (
        <Carousel
        layout={'stack'}
        data={articles.slice(0, 10)}
        sliderHeight={300}
        itemHeight={windowHeight}
        vertical={true}
        renderItem={({item, index}) => (
          <SingleNews item={item} index={index} />
        )}
        onSnapToItem={index => setActiveIndex(index)}
        />

       )  }  
      </View>
  )
}
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});
export default NewsScreen