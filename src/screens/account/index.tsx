import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  EditIcon,
  LogoutIcon,
  NotificationIcon,
  PaymentIcon,
  SettingIcon,
  StarIcon,
  TrackIcon,
  TransactionIcon,
} from '../../assets/svg';
import {AppText} from '../../reusables';
import AccountPane from './common/account-pane';
import Search from './common/search';
import {styles} from './styles';
import {MenuItemProps} from './type';
import {pallete} from '../../configs/Colors';

const Account = () => {
  return (
    <>
      <Search />
      <View style={styles.container}>
        <ProfileHeader />
        <Content />
      </View>
    </>
  );
};

export default Account;

const ProfileHeader = () => {
  return (
    <>
      <View style={styles.profileHeader}>
        <AccountPane />
      </View>
      <View style={styles.vShape} />
    </>
  );
};
const Content = () => {
  return (
    <View style={styles.content}>
      {options.map((item, index) => (
        <MenuItem key={index} text={item.text} Icon={item.icon} />
      ))}
    </View>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({text, onPress, Icon}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon height={24} width={24} fill={pallete.primary} />
    <AppText fontSize={18} text={text} />
  </TouchableOpacity>
);

const options = [
  {
    icon: NotificationIcon,
    text: 'Notification',
  },
  {
    icon: EditIcon,
    text: 'Edit profile',
  },
  {
    icon: StarIcon,
    text: 'Wishlist',
  },
  {
    icon: TransactionIcon,
    text: 'Order history',
  },
  {
    icon: TrackIcon,
    text: 'Track order',
  },
  {
    icon: PaymentIcon,
    text: 'Payment method',
  },
  {
    icon: SettingIcon,
    text: 'Settings',
  },
  {
    icon: LogoutIcon,
    text: 'Logout',
  },
];
