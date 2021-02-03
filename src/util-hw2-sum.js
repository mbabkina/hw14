export default function getSum (numberStartFrom, numberEndWith, skipEven ) {
    let result = null;

for (let i = numberStartFrom; i <= numberEndWith; i++) {
    if (skipEven && i % 2 === 0) {
        continue
    }
    result += i;
}


console.log(`The sum is: ${result}`)
}