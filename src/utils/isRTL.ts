let reRTL: RegExp, rtlChars;

rtlChars = [
  /* arabic ranges*/
  "\u0600-\u06FF",
  "\u0750-\u077F",
  "\uFB50-\uFDFF",
  "\uFE70-\uFEFF",
  /* hebrew range*/
  "\u05D0-\u05FF",
].join("");

reRTL = new RegExp("[" + rtlChars + "]", "g");

/**
 * * Count the number of characters in the text that are not numbers, spaces, or punctuation.
 * * Count the number of characters in the text that are in the Arabic Unicode block.
 * * If the number of Arabic characters is greater than the number of non-Arabic characters, then the
 * text is probably Arabic
 * @param text - The text to check for RTL.
 * @returns a boolean value.
 */
export const isRTL = (text: { replace: (arg0: RegExp, arg1: string) => { (): any; new(): any; length: any; }; match: (arg0: RegExp) => any; }) => {
  var textCount = text?.replace(/[0-9\s\\\/.,\-+="']/g, "").length; // remove multilengual characters from count
  var rtlCount = (text?.match(reRTL) || []).length;
  return rtlCount >= textCount - rtlCount && textCount > 0;
};
