type MapStringsCallback = (item: string) => string;

export function mapStrings(array: string[], callBackFn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for(let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item !== undefined) {
      newArray.push(callBackFn(item));
    }
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcUpper = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcUpper);
