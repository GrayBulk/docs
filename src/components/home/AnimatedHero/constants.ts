/** Total number of rows in the grid. */
export const numberOfRows = 4;
/** Total number of columns in the grid. */
export const numberOfColumns = 15;

/**
 * Characters and display values that each grid cell animation will iterate through.
 */
export const characterSet = [
  'A',
  '#F07836',
  'I',
  'G',
  'Y',
  '@',
  '+',
  'M',
  'X',
  '5',
  '9',
  '(',
  '3',
  'Q',
  '#E5CD30',
  'D',
  'E',
  '7',
  '#27AD75',
  'C',
  'B',
  '#',
  'V',
  '-',
  'L',
  'N',
  'U',
  'J',
  'S',
  '6',
  'P',
  '1',
  '!',
  '#CD99FD',
  ' ',
  '$',
  'W',
  '<',
  '/',
  ':',
  '0',
  '4',
  'H',
  '&',
  '#E175D6',
  'F',
  'R',
  'K',
  '2',
  'T',
  '#578BFA',
  ',',
  'O',
  '8',
  '%',
  '~',
  'Z',
];

/**
 * All the messages that the animated hero can display.
 */
export const messages = [
  [
    ['G', 'R', 'A', 'Y', ' ', 'B', 'U', 'L', 'K', ' ', 'T', 'R', 'A', 'D', 'E'],
    ['C', 'O', 'N', 'N', 'E', 'C', 'T', 'I', 'N', 'G', ' ', ' ', 'Y', 'O', 'U'],
    ['W', 'I', 'T', 'H', ' ', 'W', 'H', 'O', 'L', 'E', 'S', 'A', 'L', 'E', ' '],
    ['M', 'A', 'N', 'U', 'F', 'A', 'C', 'T', 'U', 'R', 'E', 'R', 'S', ' ', ' '],
  ],
  [
    ['B', 'U', 'L', 'K', ' ', 'O', 'R', 'D', 'E', 'R', 'S', ' ', 'F', 'O', 'R'],
    ['M', 'A', 'N', 'U', 'F', 'A', 'C', 'T', 'U', 'R', 'E', 'R', 'S', ' ', ' '],
    ['W', 'H', 'O', 'L', 'E', 'S', 'A', 'L', 'E', 'R', 'S', ' ', '&', ' ', ' '],
    ['D', 'I', 'S', 'T', 'R', 'I', 'B', 'U', 'T', 'O', 'R', 'S', ' ', ' ', ' '],
  ],
  [
    ['G', 'L', 'O', 'B', 'A', 'L', ' ', 'S', 'O', 'U', 'R', 'C', 'I', 'N', 'G'],
    ['F', 'O', 'R', ' ', 'E', 'V', 'E', 'R', 'Y', ' ', 'S', 'C', 'A', 'L', 'E'],
    ['F', 'R', 'O', 'M', ' ', 'F', 'A', 'C', 'T', 'O', 'R', 'Y', ' ', 'T', 'O'],
    ['Y', 'O', 'U', 'R', ' ', 'W', 'A', 'R', 'E', 'H', 'O', 'U', 'S', 'E', ' '],
  ],
  [
    ['T', 'R', 'A', 'D', 'E', ' ', 'S', 'M', 'A', 'R', 'T', 'E', 'R', ' ', ' '],
    ['S', 'O', 'U', 'R', 'C', 'E', ' ', 'F', 'A', 'S', 'T', 'E', 'R', ' ', ' '],
    ['G', 'R', 'A', 'Y', ' ', 'B', 'U', 'L', 'K', ':', ' ', 'Y', 'O', 'U', 'R'],
    ['T', 'R', 'A', 'D', 'E', ' ', 'P', 'A', 'R', 'T', 'N', 'E', 'R', ' ', ' '],
  ],
  [
    ['W', 'H', 'O', 'L', 'E', 'S', 'A', 'L', 'E', ' ', 'R', 'A', 'T', 'E', 'S'],
    ['D', 'I', 'R', 'E', 'C', 'T', ' ', 'F', 'R', 'O', 'M', ' ', 'T', 'H', 'E'],
    ['M', 'A', 'N', 'U', 'F', 'A', 'C', 'T', 'U', 'R', 'E', 'R', ' ', ' ', ' '],
    ['N', 'O', ' ', 'M', 'I', 'D', 'D', 'L', 'E', 'M', 'E', 'N', ' ', ' ', ' '],
  ],
];

/**
 * Maps each message's characters to its index in the characterSet.
 */
export const messagesCharSetIndices = messages.map((message) => {
  return message.map((line) => {
    return line.map((character) => {
      const index = characterSet.indexOf(character);
      return index === -1 ? 36 : index;
    });
  });
});

export const messageAccessibilityDescriptions = messages.map(
  (message) =>
    `Current message: ${message
      .map((row) => row.join('').trim())
      .filter((row) => !!row)
      .join(' ')}. Press Enter or Space to skip to the next message.`,
);

// Grid animation constants
export const autoTransitionIntervalMs = 10000; // Interval for automatic message rotation
export const gridCellDistanceDelayMs = 80; // Delay per grid unit for ripple effect
export const maxUpdatesPerSecond = 20;
