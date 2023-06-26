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
}
