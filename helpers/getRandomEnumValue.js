export function getRandomEnumValue(enumArray) {
  console.log("enum", enumArray);
  const res = enumArray[Math.floor(Math.random() * enumArray.length)];
  console.log(res);

  return res;
}
