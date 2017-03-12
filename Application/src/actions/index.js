let idCounter = 0;
export const add = text => (
  {
    type: 'add',
    id: idCounter++,
    text
  }
);
