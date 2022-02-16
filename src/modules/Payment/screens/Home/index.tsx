import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextProps, TouchableOpacity, View, ViewProps } from 'react-native';
import Animated, { Layout, SlideInLeft, SlideOutRight } from 'react-native-reanimated';
import { Title } from '../../../../atomic/atoms/Title';
import { CardList } from '../../../../atomic/organism/CardList';
import { useUsers } from '../../hooks/useUsers';
import { Container } from './styles';

interface Props extends ViewProps {
  children: string;
  idx: number;
  onPress: () => void;
}

const Item = ({ children, idx,  onPress, ...rest }: Props) => {

  return (
    <Animated.View
      style={styles.item} 
      entering={SlideInLeft.delay(idx * 200)}
      exiting={SlideOutRight}
      layout={Layout}
      {...rest}
    >
      <TouchableOpacity onPress={onPress}>
        <Text>
          {children}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const Home = () => {
  const [list, setList] = useState(['teste', 'joao', 'kleiton']);

  const handleDelete = useCallback((index: number) => {
    setList(oldState => oldState.filter((_, idx) => idx !== index))
  }, [])

  return (
    <View style={styles.container}>
      {list.map((item, idx) => (
        <Item idx={idx} key={idx} onPress={() => handleDelete(idx)}>{item}</Item>
      ))}
      <TouchableOpacity 
        onPress={() => setList(oldState => [...oldState, 'teste'])}
        style={styles.button}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#ff0066',
  },
  item: {
    backgroundColor: 'white',
    height: 20,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#ff0066',
    position: 'absolute',
    bottom: 50,
    right: 30,
  }
})
// export const Home = () => {
//   const { isLoading, users } = useUsers();
  

//   if (isLoading) {
//     return (
//     <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//       <Title>cargando....</Title>
//     </View>
//     )
//   }

//   return (
//     <Container>
//       <CardList data={users} /> 
//     </Container>
//   );
// }
