export function resolveRef(schema, ref) {
  console.log("Resolving ref:", ref);

  const refPath = ref.replace("#/", "").split("/");
  let resolvedSchema = schema;

  for (const part of refPath) {
    if (resolvedSchema[part] !== undefined) {
      resolvedSchema = resolvedSchema[part];
    } else if (schema.definitions && schema.definitions[part] !== undefined) {
      resolvedSchema = schema.definitions[part];
    } else {
      throw new Error(`Can't find ref: ${ref}`);
    }
  }

  return resolvedSchema;
}
