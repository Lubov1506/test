import {
  generateRandomArray,
  generateRandomInteger,
  generateRandomNumber,
  generateRandomObject,
  generateRandomString,
  resolveRef,
} from "./helpers/index.js";
import { schema1, schema2 } from "./constants/index.js";

export function generateRandomData(schema) {
  if (!schema) return null;
  if (schema.$ref) {
    const refSchema = resolveRef(schema.$ref);
    return generateRandomData(refSchema);
  }
  if (schema.anyOf) {
    const chosenSchema =
      schema.anyOf[Math.floor(Math.random() * schema.anyOf.length)];
    return generateRandomData(chosenSchema);
  }
  if (schema.enum) {
    const chosenEnum =
      schema.enum[Math.floor(Math.random() * schema.enum.length)];
    return chosenEnum;
  }

  switch (schema.type) {
    case "integer":
      return generateRandomInteger(schema);

    case "number":
      return generateRandomNumber(schema);

    case "string":
      return schema.pattern
        ? generatePatternString(schema.pattern)
        : generateRandomString(schema);

    case "boolean":
      return Math.random() < 0.5;

    case "array":
      return generateRandomArray(schema);

    case "object":
      return generateRandomObject(schema);

    default:
      return null;
  }
}

// console.log(generateRandomData(schema1));
console.log(generateRandomData(schema2));
