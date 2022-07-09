import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import PropTypes from 'prop-types';

const PhotoPicker = ({savePhotoHandler}) => {
  const [photo, setPhoto] = useState({});

  const {settings} = useSelector(state => state);

  const selectPhotoHandler = async () => {
    try {
      // You can also use as a promise without 'callback':
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      setPhoto(result.assets[0]);
      savePhotoHandler(photo)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {photo.hasOwnProperty('uri') ? (
          <Image source={{uri: photo.uri}} style={{width: '100%', flex: 1}} />
        ) : (
          <TouchableNativeFeedback onPress={selectPhotoHandler}>
            <View style={styles.buttonContainer}>
              <Icon name="camera" color={settings.mainColor} size={30} />
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
};
PhotoPicker.propTypes = {
  savePhotoHandler: PropTypes.func.isRequired,
};
export default PhotoPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: colors.gray,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});
