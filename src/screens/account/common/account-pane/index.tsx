import React from 'react';
import {Image, View} from 'react-native';
import {useSelector} from 'react-redux';
import {User, selectUser} from '../../../../redux/loginSlice';
import {AppText} from '../../../../reusables';
import {styles} from './styles';

const AccountPane = () => {
  const {email, firstName, image, lastName} = useSelector(selectUser) as User;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <AppText fontSize={20} text={`${firstName} ${lastName}`} />
        <AppText fontSize={16} text={`${email}`} />
      </View>
    </View>
  );
};

export default AccountPane;
