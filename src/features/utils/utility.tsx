/**
 *
 * @param min
 * @param max
 * @returns a random number between min and max
 */
const getRandom = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min));
};

/**
 *
 * @param arrayInput
 * @param nExtractions
 * @returns an array that contains {nExtractions} random extractions from the {array}
 */
export const getRandoms = (arrayInput: Array<Object>, nExtractions: number) => {
  let newArray: Array<Object> = arrayInput;

  for (let i = 0; i < nExtractions; i++) {
    const rand: number = getRandom(0, newArray.length);
    newArray = newArray.filter((x) => x !== newArray[rand]);
  }

  return arrayInput.filter((x) => !newArray.includes(x));
};
