export default function studentsPaired  (array) {
    const pairs = []
    const arrayPaired = []
    while (array.length % 2 !== 0) alert('Students number is odd, please make sure you have even number')

    for (let i = 0; i < (array.length / 2); i++) {
        pairs.push(array[i], array[array.length - i - 1])
        arrayPaired[i] = [...pairs]
        pairs.splice(0)
    }

    return arrayPaired
}