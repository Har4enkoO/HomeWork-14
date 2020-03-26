const students = ['Саша', 'Игорь', 'Лена', 'Ира', 'Алексей', 'Светлана'];
const studentsGirl = ['Лена', 'Ира', 'Светлана'];
const studentsBoy = ['Саша', 'Игорь', 'Алексей'];
const themes = [
  'Дифференциальные уравнения',
  'Теория автоматов',
  'Алгоритмы и структуры данных'
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs() {
  let result = [];
  for (let i = 0; i < studentsGirl.length; i++) {
    result = [...result, [studentsGirl[i], studentsBoy[i]]];
  }
  return result;
}
const pairs = getPairs();
export default pairs;
