import Settings from '../Settings';

test('Testing default settings', () => {
  const settings = new Settings();

  const result = settings.settings;

  expect(result).toEqual((new Map()).set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy'));
});

test.each([
  'dark', 'gray', 'light',
])('Testing custom settings: Installing a theme with the value %s', (theme) => {
  const settings = new Settings();

  settings.theme = theme;

  const result = settings.settings;

  expect(result).toEqual((new Map()).set('theme', theme).set('music', 'trance').set('difficulty', 'easy'));
});

test('Testing custom settings: Installing a theme with an invalid value', () => {
  const settings = new Settings();

  settings.theme = 'white';

  const result = settings.settings;

  expect(result).toEqual((new Map()).set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy'));
});

test.each([
  'chillout', 'off', 'pop', 'rock', 'trance',
])('Testing custom settings: Installing a music with the value %s', (music) => {
  const settings = new Settings();

  settings.music = music;

  const result = settings.settings;

  expect(result).toEqual((new Map()).set('theme', 'dark').set('music', music).set('difficulty', 'easy'));
});

test('Testing custom settings: Installing a music with an invalid value', () => {
  const settings = new Settings();

  settings.music = 'on';

  const result = settings.settings;

  expect(result).toEqual((new Map()).set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy'));
});

test.each([
  'easy', 'hard', 'nightmare', 'normal',
])('Testing custom settings: Installing a difficulty with the value %s', (difficulty) => {
  const settings = new Settings();

  settings.difficulty = difficulty;

  const result = settings.settings;

  expect(result).toEqual((new Map()).set('theme', 'dark').set('music', 'trance').set('difficulty', difficulty));
});

test('Testing custom settings: Installing a difficulty with an invalid value', () => {
  const settings = new Settings();

  settings.difficulty = 'invulnerability';

  const result = settings.settings;

  expect(result).toEqual((new Map()).set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy'));
});
