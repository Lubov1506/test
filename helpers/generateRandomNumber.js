export function generateRandomNumber(schema) {
    const min = schema.minimum || 0;
    const max = schema.maximum || 100;
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(2));
  }