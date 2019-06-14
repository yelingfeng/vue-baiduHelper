export const toKebabCase = str =>
    str
        .replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
        .replace(/^-/, '')
