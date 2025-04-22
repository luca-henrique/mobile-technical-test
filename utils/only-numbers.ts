export function onlyNumbers(keyboardEvent: string) {
  const isNumberKey = /\d/.test(keyboardEvent);

  console.log(isNumberKey);
}
