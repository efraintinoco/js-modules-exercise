
import { difference } from "lodash"

export default function differenceOfArrays(arrayOne, arrayTwo) {
    const differenceOfArrays = difference(arrayOne, arrayTWo)
    return `The difference between ${arrayOne} and ${arrayTwo} is ${differenceOfArrays}`
}


