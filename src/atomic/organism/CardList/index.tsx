import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Animated, { FadeIn, SlideInLeft, ZoomIn } from 'react-native-reanimated';
import { Card, CardProps } from '../../molecules/Card';


interface Props {
  data: CardProps[];
}

const { width } = Dimensions.get('window');

export const CardList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ image, title }) => `${image}${title}`}
      renderItem={({ item: {image, title }, index } ) => (
        <Animated.View
          entering={SlideInLeft.delay(100 * index)}
        >
          <Card  
            image={image} 
            title={title}
            />
        </Animated.View>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      contentContainerStyle={{ width, paddingVertical: 50 }}
    />
  );
}
