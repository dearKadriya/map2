import Settings from './Settings';

test('Проверка, что настройки пользователя устанавливаются', () => {
  const first = new Settings();
  const result = first.set({ theme: 'black' });
  expect(result).toEqual(new Map([['theme', 'black']]));
});

test('Проверка, что при получении настроек учитываются пользовательские настройки', () => {
  const first = new Settings();
  first.set({ theme: 'black' });
  const result = first.get();
  expect(result).toEqual(new Map([['theme', 'black'], ['music', 'trance'], ['difficulty', 'easy']]));
});
