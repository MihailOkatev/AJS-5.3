export default function tooltipDisplay(character) {
  const types = {
    Bowman: '\u1F620',
    Swordsman: '\u1F621',
    Magican: '\u1F9D0',
    Demon: '\u1F9D0',
    Undead: '\u1F480',
    Zombie: '\u1F9DF',
  };
  const {
    name, type, health, level, attack, defence,
  } = character;
  const tooltip = `${String(types[type])} ${name[0]} (${level}) ${String('\u2694')} - ${attack}, ${String('\u1F6E1')} - ${defence}  ${String('\u2764')} - ${health} `;
  return tooltip;
}
