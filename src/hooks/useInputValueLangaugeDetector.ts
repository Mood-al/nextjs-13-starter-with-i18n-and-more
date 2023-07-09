
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isRTL } from "../utils/isRTL";
import useUpdateEffect from "./useUpdateEffect";

const useInputValueLangaugeDetector = (watch: unknown) => {
  const [dir, setDir] = useState<string>("ltr");
  const { locale } = useRouter();
  const [focussed, setFocussed] = useState(false);

  /* If the user is typing and the language is Arabic, then set the direction to
 right-to-left. */
  useEffect(() => {
    if (watch === "" && locale === "ar") {
      setDir("rtl");
      return;
    }
    /* The above code is setting the direction of the text to right to left if the user is focussed on
    the text box. */
    if (focussed) {
      isRTL(watch) ? setDir("rtl") : setDir("ltr");
    }
  }, [watch, focussed, locale]);

  /* Using useUpdateEffect to update the direction of the page based on the locale. */
  useUpdateEffect(() => {
    locale === "ar" ? setDir("rtl") : setDir("ltr");
  }, [locale]);

  /**
   * When the input field is focused, set the direction to rtl if the input field is empty and the
   * language is arabic, otherwise set the direction to ltr
   * @param e - The event object.
   * @returns The `onInputFocus` function is being returned.
   */
  const onInputFocus = (e) => {
    setFocussed(true);
    if (e.target.value === "" && locale === "ar") {
      setDir("rtl");
      return;
    }
    isRTL(e.target.value) ? setDir("rtl") : setDir("ltr");
  };

  /**
 * When the input field loses focus / blurred, set the direction to the direction of the language
 * @param e - The event object that was passed to the onInputBlur function.
 
 */
  const onInputBlur = (e) => {
    setFocussed(false);
    if (e.target.value === "" && locale === "ar") {
      setDir("rtl");
      return;
    }
    locale === "ar" ? setDir("rtl") : setDir("ltr");
  };

  return {
    dir,
    onInputBlur,
    onInputFocus,
  };
};

export default useInputValueLangaugeDetector;
