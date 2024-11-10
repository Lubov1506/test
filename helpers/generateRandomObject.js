import { generateRandomData } from "../index.js";

export function generateRandomObject(schema) {
  const result = {};
  const required = schema.required || [];
  const properties = schema.properties || {};

  for (const [key, propertySchema] of Object.entries(properties)) {
    if (required.includes(key) || Math.random() > 0.5) {
      result[key] = generateRandomData(propertySchema);
    }
  }

  return result;
}
