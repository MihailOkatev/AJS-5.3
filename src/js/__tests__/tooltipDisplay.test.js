import tooltipDisplay from '../basic';

test('should show correct tooltip', () => {
  const result = tooltipDisplay({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });

  expect(result).toEqual(`${String('\u1F620')} Л (1) ${String('\u2694')} - 40 ${String('\u1F6E1')} - 10 ${String('\u2764')} - 50`);
});

test('should show error', () => {
  function result() {
    tooltipDisplay({
      name: 'Лучник',
      type: 'horse',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    });
  }
  expect(result).toThrow();
});

test('should show error', () => {
  function result() {
    tooltipDisplay({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
    });
  }
  expect(result).toThrow();
});
