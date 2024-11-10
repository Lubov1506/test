export function generateRandomInteger(schema) {
    const min = schema.minimum || 0;
    const max = schema.maximum || 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }