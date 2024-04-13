import DifficultyTypes from '../data/DifficultyTypes';
import MusicTypes from '../data/MusicTypes';
import ThemeTypes from '../data/ThemeTypes';

const difficultyTypes = Object.values(DifficultyTypes);
const musicTypes = Object.values(MusicTypes);
const themeTypes = Object.values(ThemeTypes);

export default class Settings {
  constructor() {
    this.defaultSettings = (new Map())
      .set('theme', ThemeTypes.dark)
      .set('music', MusicTypes.trance)
      .set('difficulty', DifficultyTypes.easy);
    this.customSettings = new Map();
  }

  set difficulty(value) {
    if (difficultyTypes.includes(value)) {
      this.customSettings.set('difficulty', value);
    }
  }

  set music(value) {
    if (musicTypes.includes(value)) {
      this.customSettings.set('music', value);
    }
  }

  set theme(value) {
    if (themeTypes.includes(value)) {
      this.customSettings.set('theme', value);
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.customSettings]);
  }
}
