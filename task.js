/**
 * Generates a random object based on a provided JSON Schema.
 * @param {Object} schema - JSON Schema to define the structure of the generated object.
 * @returns {Object|Array|String|Number|Boolean} - Random data object that adheres to the schema.
 */
const data = require("./data.json");
function generateRandomObject(schema) {
  console.log(schema);

  if (schema) {
    // const schemaObj = JSON.parse(schema);
    switch (schema.type) {
      case "integer":
        return generateRandomInteger(schema);
      case "number":
        return generateRandomNumber(schema);
      case "string":
        return generateRandomString(schema);
      case "boolean":
        return Math.random() < 0.5;
      case "array":
        return generateRandomArray(schema);
      case "object":
        return generateRandomObjectProperties(schema);
      default:
        throw new Error(`Unsupported schema type: ${schema.type}`);
    }
  } else {
    return "You must provide a schema";
  }
}
// console.log(JSON.parse('{"type": "integer", "minimum": 10, "maximum": 20}'));
const schema =
  '{"type": "object",    "properties": {"name": { "type": "string", "minLength": 3, "maxLength": 7 },  "age": { "type": "integer", "minimum": 18, "maximum": 99 }},"required": ["name"]}';
//   console.log(JSON.parse(schema));

// let res = generateRandomObject(
//   '{"type": "integer", "minimum": 10, "maximum": 20 }'
// );
let res = generateRandomObject(data);
console.log(res);

// Helper functions for each data type:

/**
 * Generates a random integer within the specified min and max range.
 */
function generateRandomInteger(schema) {
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random number within the specified min and max range.
 */
function generateRandomNumber(schema) {
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random string of specified length.
 */
function generateRandomString(schema) {
  const length =
    Math.floor(Math.random() * (schema.maxLength - schema.minLength + 1)) +
    schema.minLength;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

/**
 * Generates a random array based on the schema's item definition.
 */
function generateRandomArray(schema) {
  const length =
    Math.floor(Math.random() * (schema.maxItems - schema.minItems + 1)) +
    schema.minItems;
  return Array.from({ length }, () => generateRandomObject(schema.items));
}

/**
 * Generates an object with properties based on the provided schema.
 */
function generateRandomObjectProperties(schema) {
  const obj = {};
  //   console.log(schema, '>>>>>>>>>>>>>>');

  for (const key in schema.properties) {
    if (schema.required && schema.required.includes(key)) {
      // console.log(key, '>>>>>>>>>>>>>>');

      obj[key] = generateRandomObject(schema.properties[key]);
      //   console.log(obj, 'obj');
    } else if (Math.random() > 0.5) {
      // Randomly decide to include optional properties
      obj[key] = generateRandomObject(schema.properties[key]);
    }
  }
  return obj;
}
