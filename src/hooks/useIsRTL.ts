import { useLocale } from 'next-intl';
import React from 'react'

const useIsRTL = () => {
    const locale = useLocale();

    return locale === 'ar'
}

export default useIsRTL