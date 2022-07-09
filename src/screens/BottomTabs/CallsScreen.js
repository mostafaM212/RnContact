import {
  Button,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  FlatList,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import colors from '../../assets/theme/colors';
import CallLogItem from '../../components/CallLogs/CallLogItem';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MakePhoneModal from '../../components/CallLogs/MakePhoneModal';

const CallsScreen = props => {
  const {callLogs, settings} = useSelector(state => state);
  const [searchedCallLogs, setSearchedCallLogs] = useState([]);
  const [showCallModal, setShowCallModal] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const onSearch = query => {
    setSearchedCallLogs([...callLogs.callLogs]);
    let filteredContacts = searchedCallLogs.filter(callLog => {
      console.log(callLog.name.includes(query));
      if (callLog.name) {
        if (callLog.name.includes(query)) {
          return true;
        }
      }
      return false;
    });
    setSearchedCallLogs(filteredContacts);
  };
  const onTouchKeyboard = () => {};
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.navy : '#fff'},
      ]}>
      <View
        style={{width: '94%', justifyContent: 'center', alignItems: 'center'}}>
        <SearchBar
          isDarkMode={isDarkMode}
          searchHandler={onSearch}
          iconColor={settings.mainColor}
        />
        <FlatList
          data={
            searchedCallLogs.length > 0 ? searchedCallLogs : callLogs.callLogs
          }
          keyExtractor={(call, index) => index}
          renderItem={data => (
            <CallLogItem callLog={data.item} navigation={props.navigation} />
          )}
        />
      </View>
      <MakePhoneModal
        isShown={showCallModal}
        settings={settings}
        callLogs={callLogs.callLogs.slice()}
        disableModal={() => setShowCallModal(false)}
        isDarkMode={isDarkMode}
      />

      <View
        style={[{...styles.plusButton}, {backgroundColor: settings.mainColor}]}>
        <TouchableNativeFeedback onPress={() => setShowCallModal(true)}>
          <Icon name="keyboard" size={25} color="#ffffff" solid />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default CallsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,

    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
