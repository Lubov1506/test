import { generateRandomData } from "../index.js";

export function generateRandomArray(schema) {
  const minItems = schema.minItems || 1;
  const maxItems = schema.maxItems || minItems + 5;
  const length =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  const unique = schema.uniqueItems || false;
  const items = new Set();

  while (items.size < length) {
    const item = generateRandomData(schema.items);
    if (unique) {
      items.add(item);
    } else {
      items.add(item);
      if (items.size >= length) break;
    }
  }

  return Array.from(items);
}
