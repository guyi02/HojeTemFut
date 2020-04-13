import React from 'react';

import { View, FlatList, Text, StatusBar } from 'react-native';
import {
  Container,
  HeaderArea,
  IconButton,
  IconLeft,
  IconRight,
  SelectArea,
  SelectFilter,
  PlayersArea,
  CardInPlayer,
  PlayerCard,
  PlayerImage,
  PlayerName,
  PlayerSurname,
  ShadowCard,
} from './styles';

const data = [
  {
    id: 1,
    name: 'Cristiano',
    surname: 'Ronaldo',
    img: assets.player,
  },
  {
    id: 2,
    name: 'Mohamed',
    surname: 'Salah',
    img: assets.player2,
  },
  {
    id: 3,
    name: 'Paulo',
    surname: 'Dybala',
    img: assets.player3,
  },
  // {
  //     id: 4,
  //     texto: "teste4"
  // },
  // {
  //     id: 5,
  //     texto: "teste5"
  // },
  // {
  //     id: 6,
  //     texto: "teste6"
  // },
];

import assets from '~/services/imagesImport';
import AsyncStorage from '@react-native-community/async-storage';
function Players({ navigation }) {
  logout = () => {
    AsyncStorage.clear();
    navigation.navigate('AuthStack');
  };
  // const { loading, error, data } = useQuery(FETCH_USERS);

  // if(loading){
  //       return <CenterSpinner/>;
  // }
  // if (error) {
  //       return <Text style={{marginTop: 20}}>{error.graphQLErrors[0].message}</Text>;
  // }

  return (
    <Container>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <HeaderArea>
        <IconButton>
          <IconLeft />
        </IconButton>

        <IconButton onPress={logout}>
          <IconRight />
        </IconButton>
      </HeaderArea>

      <SelectArea>
        <SelectFilter></SelectFilter>
      </SelectArea>

      <PlayersArea>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
          data={data}
          horizontal={true}
          renderItem={({ item, i }) => (
            <CardInPlayer>
              <PlayerCard>
                <PlayerImage resizeMode="contain" source={item.img} />
                <PlayerName>{item.name}</PlayerName>
                <PlayerSurname>{item.surname}</PlayerSurname>
                <ShadowCard />
              </PlayerCard>
            </CardInPlayer>
          )}
        />
      </PlayersArea>
    </Container>
  );
}

export default Players;
