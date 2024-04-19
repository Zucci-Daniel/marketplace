import React from 'react';
import {TextInput, View} from 'react-native';
import {BasketIcon, MenuIcon, SearchIcon} from '../../../../assets/svg';
import {pallete} from '../../../../configs/Colors';
import {styles} from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <BasketIcon fill={pallete.primary} height={24} width={24} />
      <View style={styles.search}>
        <SearchIcon height={10} width={10} />
        <TextInput
          placeholder="Search in basket"
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
      </View>
      <MenuIcon fill={pallete.primary} height={24} width={24} />
    </View>
  );
};

export default Search;
