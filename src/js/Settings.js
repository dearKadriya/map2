const defaultData = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
export default class Settings {
  constructor() {
    this.userSettings = new Map();
  }

  set(obj) {
    for (const key in obj) {
      this.userSettings.set(key, obj[key]);
    }
    return this.userSettings;
  }

  get() {
    for (const [key, value] of defaultData) {
      if (!this.userSettings.has(key)) {
        this.userSettings.set(key, value);
      }
    } return this.userSettings;
  }
}
