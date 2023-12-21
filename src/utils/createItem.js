export const createItem = (number) => {
    return [...Array(number).keys()]
}

export const sortedByOrder = (a, b) => {
    return a.order - b.order
}