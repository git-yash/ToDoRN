import {Linking} from 'react-native';
import qs from 'qs';
import ReactNativeEmail from 'react-native-email';

export default class Util {
  public static toDateTime(secs: number): Date {
    const t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  public static getDay(day: number): String {
    let dayString: String;

    switch (day) {
      case 0:
        dayString = 'Sun';
        break;
      case 1:
        dayString = 'Mon';
        break;
      case 2:
        dayString = 'Tue';
        break;
      case 3:
        dayString = 'Wed';
        break;
      case 4:
        dayString = 'Thu';
        break;
      case 5:
        dayString = 'Fri';
        break;
      default:
        dayString = 'Sat';
    }

    return dayString;
  }

  public static getDateString(date: Date): String {
    if (!date) {
      return '';
    }
    return Util.getDay(date.getDay()) + ' ' + date.toLocaleString();
  }

  public static generateRandomNumber(): number {
    const min = 100000; // Minimum value (inclusive)
    const max = 999999; // Maximum value (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static async sendEmail(to: String, subject: String, body: String) {
    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
      subject: subject,
      body: body,
    });

    if (query.length) {
      url += `?${query}`;
      console.log('URL: ' + url);
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
  }

  // public static sendEmail(to: string, subject: string, body: string) {
  //   ReactNativeEmail(to, {
  //     cc: undefined,
  //     bcc: undefined,
  //     body: body,
  //     subject: subject,
  //     checkCanOpen: true,
  //   })
  //     .then(() => {
  //       console.log('Email Sent');
  //     })
  //     .catch(error => console.log('Error: ', error));
  // }
}
