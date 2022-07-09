import colors from '../assets/theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export class CallLog {
  constructor(date, name, duration, phoneNumber, type) {
    this.date = date;
    this.duration = duration;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.type = type;
  }

  callLogIcon = () => {
    let data = {name: '', color: ''};

    if (this.type === 'MISSED') {
      data = {name: 'phone-slash', color: colors.danger};
    } else if (this.type === 'OUTGOING') {
      data = {name: 'arrow-up', color: colors.PURPLE};
    } else if (this.type === 'INCOMING') {
      data = {name: 'arrow-down', color: colors.PURPLE};
    } else {
      data = {name: 'ban', color: colors.primary};
    }

    return <Icon name={data.name} color={data.color} size={15} />;
  };

  getDay = () => {
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var d = new Date(this.date);
    var dayName = days[d.getDay()];
    return dayName;
  };
}
