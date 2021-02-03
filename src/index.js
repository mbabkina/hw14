import { totalCentOffPrice } from './util-hw1-cent-off';
import { getSum } from './util-hw2-sum';
import { getRandomIntegerInRange } from './util-hw3-random-number';
import { studentsPaired } from './util-hw4-student-pairs';
import { randomArray } from './util-hw5-random-array';
import { getStudentInfo } from './util-hw6-student-info';
import { getTotalTaxes } from './util-hw7-total-taxes';

/* HW_1 */
const priceApple = 15.678;
const priceOrange = 123.965;
const pricePear = 90.2345;
console.log(totalCentOffPrice(priceApple, priceOrange, pricePear));

/* HW_2 */
const numberStartFrom = 12;
const numberEndWith = 69;
const skipEven = true;
getSum(numberStartFrom, numberEndWith, skipEven);

/* HW_3 */
console.log(getRandomIntegerInRange(1, 100));

/* HW_4 */
const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
studentsPaired(students);

/* HW_5 */
randomArray(5, 1, 99);

/* HW_6 */
const studentsArray = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

getStudentInfo(studentsArray, 2);

/* HW_7 */
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
getTotalTaxes(ukraine);
