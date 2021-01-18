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

for (i = 0; i < studentsList.length; i++) {
	console.log(studentsList[i].name + ' ' + studentsList[i].surname);
}
console.log('---------------------');
