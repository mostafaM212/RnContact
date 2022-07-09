import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';
import colors from '../../../assets/theme/colors';
import {useSelector} from 'react-redux';


const list = ['Home', 'Work', 'Mobile', 'Main'];
const ListViewer = ({label, setLabel}) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  const isDarkMode = useColorScheme() === 'dark';
  const {settings} = useSelector(state => state);

  const toggleHandler = value => {
    setExpanded(!expanded);
    setLabel(value)
  };
  return (
    <List.Accordion
      style={[
        styles.list,
        {
          backgroundColor: isDarkMode ? colors.navy : colors.gray,
          borderColor: settings.mainColor,
        },
      ]}
      expanded={expanded}
      onPress={handlePress}
      titleStyle={{color: isDarkMode ? colors.gray : settings.mainColor}}
      title="Home"
      left={props => <List.Icon {...props} icon="folder" />}>
      {list.map((item, index) => (
        <List.Item
          title={item}
          titleStyle={{
            color: isDarkMode ? colors.gray : settings.mainColor,
          }}
          key={index}
          onPress={() => toggleHandler(item)}
        />
      ))}
    </List.Accordion>
  );
};

export default ListViewer;

const styles = StyleSheet.create({
  list: {
    borderWidth: 2,
  },
});
