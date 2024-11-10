import {
  generateRandomArray,
  generateRandomInteger,
  generateRandomNumber,
  generateRandomObject,
  generateRandomString,
  getRandomEnumValue,
  resolveRef,
} from "./helpers/index.js";
import { schema1, schema2 } from "./constants/index.js";

export function generateRandomData(schema) {
  if (!schema) return null;
  if (schema["$ref"]) {
    const resolvedSchema = resolveRef(schema, schema["$ref"]);
    console.log(resolvedSchema);
    
    return generateRandomData(resolvedSchema);
  }
  if (schema.anyOf) {
    const chosenSchema =
      schema.anyOf[Math.floor(Math.random() * schema.anyOf.length)];
    return generateRandomData(chosenSchema);
  }
  if (schema.enum) {
    const chosenEnum =
      schema.enum[Math.floor(Math.random() * schema.enum.length)];
    console.log(chosenEnum);

    return chosenEnum;
  }

  switch (schema.type) {
    case "integer":
      console.log("integer");

      return generateRandomInteger(schema);

    case "number":
      console.log("number");
      return generateRandomNumber(schema);

    case "string":
      console.log("string");
      return schema.pattern
        ? generatePatternString(schema.pattern)
        : generateRandomString(schema);

    case "boolean":
      console.log("boolean");
      return Math.random() < 0.5;

    case "array":
      console.log("array");
      return generateRandomArray(schema);

    case "object":
      console.log("object");
      return generateRandomObject(schema);

    default:
      console.log("null", schema);
      return null;
  }
}

console.log(generateRandomData(schema1), "start 1");
console.log(generateRandomData(schema2), "start 2");
