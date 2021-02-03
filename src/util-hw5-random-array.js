export default function randomArray  (length, min, max) { 
       console.log(`Random array is ${Array.from({ length: length }, el => (Math.round(min + Math.random() * max)))}`)
}