/**
 * Checks if a given character is hiragana.
 *
 * @param  {string} char - If a string with a length of >=2 is given, only the first character is evaluated.
 * @returns {boolean}  If the given char is a hiragana.
 */
export const isHiragana = (char: string): boolean => {
  const character = char[0];
  return character >= "\u3040" && character <= "\u309f";
};

/**
 * Checks if a given character is katakana.
 *
 * @param {string} char - If a string with a length of >=2 is given, only the first character is evaluated.
 *  @returns {boolean} If the given char is a katakana.
 */
export const isKatakana = (char: string): boolean => {
  const character = char[0];
  return character >= "\u30a0" && character <= "\u30ff";
};

/**
 * Checks if a given character is hiragana or katakana.
 *
 * @param {string} char - If a string with a length of >=2 is given, only the first character is evaluated.
 *  @returns {boolean} If the given char is either hiragana or katakana.
 */
export const isKana = (char: string): boolean => {
  return isHiragana(char) || isKatakana(char);
};

/**
 * Checks if a given string has any hiragana.
 *
 * @param  {string} text - Will check all characters within this string
 * @returns {boolean}  If the given string has any hiragana
 */
export const hasHiragana = (text: string): boolean => {
  return [...text].some((x) => isHiragana(x));
};

/**
 * Checks if a given string has any katakana.
 *
 * @param  {string} text - Will check all characters within this string
 * @returns {boolean}  If the given string has any katakana
 */
export const hasKatakana = (text: string): boolean => {
  return [...text].some((x) => isKatakana(x));
};

/**
 * Checks if a given string has any kana.
 *
 * @param  {string} text - Will check all characters within this string
 * @returns {boolean}  If the given string has any katakana
 */
export const hasKana = (text: string): boolean => {
  return [...text].some((x) => isKana(x));
};
