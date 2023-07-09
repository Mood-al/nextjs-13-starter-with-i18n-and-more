import useIsRTL from "./useIsRTL";



const useHTMLDirection = () => {
    const isRTL = useIsRTL();
    return isRTL ? "rtl" : 'ltr'
}

export default useHTMLDirection