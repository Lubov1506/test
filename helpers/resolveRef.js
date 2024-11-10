export function resolveRef( ref, schema) {
  const refPath = ref.replace("#", "").split("/");
  let resolvedSchema = schema.definitions;
  
  for (const part of refPath) {
    resolvedSchema = resolvedSchema[part];
    if (!resolvedSchema) {
      throw new Error(`Can't find ref: ${ref}`);
    }
  }
  return resolvedSchema;
}