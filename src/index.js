const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')
const colors = require('./colors')

function rgba(hex, alpha) {
    const {
        red,
        green,
        blue
    } = hexRgb(hex)
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

const spacing = {
    px: '1px',
    '0': '0',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '13': '3.25rem',
    '14': '3.5rem',
    '15': '3.75rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
}

const boxShadow = {
    ...defaultTheme.boxShadow,
    'default': '0 0 1px rgba(67,90,111,.47), 0 2px 4px -2px rgba(67,90,111,.3)',
    'lg': 'rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 8px 10px -4px',
    'inset': 'inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06)',
    'outline-neutral': `0 0 0 3px ${rgba(colors.blue[1000], 0.14)}, inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.14)`,
    'solid': '0 0 0 2px currentColor',
}

const fontSize = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
}

const spinner = {
    '.spinner>circle': {
        'stroke-dashoffset': '600',
        'stroke-dasharray': '300',
        'stroke-width': '12',
        'stroke-miterlimit': '10',
        'stroke-linecap': 'round',
        'stroke': 'currentColor',
        'fill': 'transparent',
    }
}

const animation = {
    ...defaultTheme.animation,
    'spinner': 'spinner 2s linear 0s infinite',
    'spinner-circle': 'spinner-circle 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite'
}

const keyframes = {
    ...defaultTheme.keyframes,
    'spinner': {
        '0%': {
            transform: 'rotate(0)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        },
    },
    'spinner-circle': {
        '0%': {
            'stroke-dashoffset': '600'
        },
        '100%': {
            'stroke-dashoffset': '0'
        },
    },
}

module.exports = plugin(function({
    addComponents,
}) {
    addComponents(spinner)
}, {
    theme: {
        colors,
        spacing,
        boxShadow,
        animation,
        keyframes,
    },
    variants: {
        backgroundColor: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus', 'active'],
        borderColor: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
        boxShadow: ['responsive', 'group-focus', 'hover', 'focus'],
        textColor: [
            'responsive',
            'group-hover',
            'group-focus',
            'hover',
            'focus-within',
            'focus',
            'active',
        ],
        textDecoration: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
        zIndex: ['responsive', 'focus-within', 'focus'],
        typography: ['responsive'],
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        backgroundImage: ['responsive', 'hover', 'focus', 'active'],
        backgroundOpacity: ['responsive', 'hover', 'focus', 'active'],
    },
})