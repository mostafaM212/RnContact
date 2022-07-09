import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/theme/colors';
import PropTypes from 'prop-types';


const SearchBar = ({ isDarkMode, searchHandler , iconColor}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const barStyle = (isScroll) => {
    return isScroll ? { marginTop: 10, } : {position: 'absolute',
    top: 20,}
  }
  return (
    <View style={[styles.container ]}>
      <Searchbar
        placeholder="Search"
        placeholderTextColor={isDarkMode ? colors.gray : colors.navy}
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon={() => <Icon name="search" size={25} color={iconColor} />}
        onEndEditing={() => searchHandler(searchQuery)}
        onResponderReject={() => console.log('cancle')}
        style={{backgroundColor : isDarkMode ? colors.navy : '#ffff' ,color : isDarkMode ? '#fff' : iconColor}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '94%',
  }
})


export default SearchBar;
