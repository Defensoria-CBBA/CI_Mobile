import React from 'react';
import { View } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH,ITEM_WIDTH } from './CarouselCardItem';
import data from './data';

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={19}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
              
            />
            
        </View>
    )
}

export default CarouselCards;