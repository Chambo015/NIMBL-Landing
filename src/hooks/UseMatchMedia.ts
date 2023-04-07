interface IScreens {
    mobile: any,
    sm: any,
    md: any,
    lg: any,
    xl: any,
    '2xl': any,
    '3xl': any
}

// Omit как бы делает свойство mobile необязательным
const screensSize: Omit<IScreens, 'mobile'> = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1660,
}

import { useMediaQuery } from '@vueuse/core'
import { computed } from 'vue'

// Partial делает все свойства как необязательные
export function UseMatchMedia(screens: Partial<IScreens>) {
    const is3xl =  useMediaQuery(`(min-width: ${screensSize['3xl']}px)`)
    const is2xl =  useMediaQuery(`(min-width: ${screensSize['2xl']}px)`)
    const isXl =  useMediaQuery(`(min-width: ${screensSize['xl']}px)`)
    const isLg =  useMediaQuery(`(min-width: ${screensSize['lg']}px)`)
    const isMd =  useMediaQuery(`(min-width: ${screensSize['md']}px)`)
    const isSm =  useMediaQuery(`(min-width: ${screensSize['sm']}px)`)
    const computedSize =  computed(() => {
        if(is3xl.value) return screens['3xl'] || screens['2xl'] || screens.xl || screens.lg || screens.md || screens.sm || screens.mobile;
        if(is2xl.value) return screens['2xl'] || screens.xl || screens.lg || screens.md || screens.sm || screens.mobile;
        if(isXl.value) return screens.xl || screens.lg || screens.md || screens.sm || screens.mobile;
        if(isLg.value) return screens.lg || screens.md || screens.sm || screens.mobile;
        if(isMd.value) return screens.md || screens.sm || screens.mobile;
        if(isSm.value) return screens.sm || screens.mobile;
        return screens.mobile
    })
    return [computedSize]
}