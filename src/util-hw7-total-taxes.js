export default function getTotalTaxes(country) {
    const result =  +(this.tax * this.middleSalary * this.vacancies).toFixed(2)
    console.log(`Total tax amount in ${country} is ${result}`)
}