import { generatePatternString } from "./generatePatternString.js";

export function generateRandomString(schema) {
  const length = schema.minLength || 5;
  const maxLength = schema.maxLength || length + 5;
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const bigCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallCharSet = "abcdefghijklmnopqrstuvwxyz";
  const numSet = "0123456789";
  const strLength =
    Math.floor(Math.random() * (maxLength - length + 1)) + length;

  if (schema.pattern) {
    return generatePatternString(schema.pattern);
  }

  return Array.from({ length: strLength }, () =>
    charSet.charAt(Math.floor(Math.random() * charSet.length))
  ).join("");
}
