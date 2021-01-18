// Traccia 1
console.log('----- Traccia 1 -----');
var student = {
	'name': 'Mario',
	'surname': 'Rossi',
	'age': '22',
}

for (var key in student) {
	console.log(student[key]);
}
console.log('---------------------');


// Traccia 2
console.log('----- Traccia 2 -----');
var studentsList = [
	{
		'name': 'Luigi',
		'surname': 'Bianchi',
		'age': '23',
	},
	{
		'name': 'Marco',
		'surname': 'Neri',
		'age': '24',
	},
	{
		'name': 'Guido',
		'surname': 'Verdi',
		'age': '25',
	},
]

console.log('Gli studenti sono: ');
for (i = 0; i < studentsList.length; i++) {
	console.log(studentsList[i].name + ' ' + studentsList[i].surname);
}
console.log('---------------------');


// Traccia 3
console.log('----- Traccia 3 -----');
var newStudent = {};
newStudent.name = prompt('Inserisci il nome del nuovo studente');
if (!isNaN(newStudent.name)) {
	alert('Non hai inserito un nome valido');
	location.reload();
}
newStudent.surname = prompt('Inserisci il cognome del nuovo studente');
if (!isNaN(newStudent.surname)) {
	alert('Non hai inserito un cognome valido');
	location.reload();
}
newStudent.age = prompt('Inserisci l\'età del nuovo studente');
if (isNaN(newStudent.age) || newStudent.age < 1) {
	alert('Non hai inserito un\'età valida');
	location.reload();
}
studentsList.push(newStudent);

console.log('Gli studenti sono: ');
for (x = 0; x < studentsList.length; x++) {
	if ((x + 1) === studentsList.length) {
		console.log(studentsList[x].name + ' ' + studentsList[x].surname + ' ' + studentsList[x].age);
	} else {
		console.log(studentsList[x].name + ' ' + studentsList[x].surname);
	}
}
console.log('---------------------');
