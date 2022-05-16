function addStudent(){
	document.getElementById('rollno').innerHTML='ABC00'+rollno;
	document.getElementById('form').style.display='block';
	document.getElementById('tb').style.display='none';
	document.getElementById('carddiv').style.display='none';

	document.getElementById('fname').value='';
	document.getElementById('lname').value='';
	document.getElementById('age').value='';
    var gen = document.getElementsByName('gender');
    for (var i = 0; i < gen.length; i++) {
    	gen[i].checked=false;
    }
	document.getElementById('mathmark').value='';
	document.getElementById('englishmark').value='';
	document.getElementById('computermark').value='';
	var favSub = document.getElementById('favsubject').options;
	for (var i=0; i<favSub.length; i++) {
		favSub[i].selected=false;
	}
	document.getElementById('formbtn').innerHTML='<button type="button" onclick=add() id="addbtn">Add</button>';
}

var studentRegister = [];

var rollno = 1;

function add(){
	var firstName = document.getElementById('fname').value;
	document.getElementById('fname').value='';

	var lastName = document.getElementById('lname').value;
	document.getElementById('lname').value='';

	var age = document.getElementById('age').value;
	document.getElementById('age').value='';

	var gen = document.getElementsByName('gender');
	var gender;
	for (var i = 0; i < gen.length; i++) {
		if (gen[i].checked == true) {
			gender = gen[i].value;
		}
		gen[i].checked = false;
	}
	var mathMark = document.getElementById('mathmark').value;
	document.getElementById('mathmark').value='';

	var englishmark = document.getElementById('englishmark').value;
	document.getElementById('englishmark').value='';

	var computermark = document.getElementById('computermark').value;
	document.getElementById('computermark').value='';

	var favSubject = document.getElementById('favsubject').options;
	var favouriteSubject = [];
	for (var i = 0; i < favSubject.length; i++) {
		if (favSubject[i].selected == true) {
			favouriteSubject.push(favSubject[i].value);
		}
		favSubject[i].selected = false;
	}
	var student = {
		rollNo: 'ABC00'+ rollno,
		fname : firstName,
		lname : lastName,
		Age   : age,
		Gender: gender,
		math  : mathMark,
		english:englishmark,
		computer:computermark,
		favSubject:favouriteSubject 
	};
	studentRegister.push(student);
	rollno++;

	document.getElementById('rollno').innerHTML='ABC00'+ rollno;
	alert('Student added Successfully');
}

function displayAll(){
	document.getElementById('form').style.display='none';
	document.getElementById('carddiv').style.display='none';
	var details = "";
	for (var i=0; i<studentRegister.length; i++) {
		details = details + '<tr> <td>'+ studentRegister[i].fname +" "+ studentRegister[i].lname +'</td> <td>'+ studentRegister[i].Age +'</td> <td>'+ studentRegister[i].rollNo +'</td> <td>' + studentRegister[i].Gender +'</td> <td> <div><button onclick=displayStudent('+i+') id="displaybtn">display student</button> <button type="button" onclick=editStudent('+i+') id="editbtn">Edit student</button> <button type="button" onclick=deleteStudent('+i+') id="deletebtn">Delete student</button></div> </td> </tr>';
	}
	document.getElementById('tablebody').innerHTML=details;
	details = "";
	if(studentRegister.length == 0){
		alert('Student Not Found');
	}else{
		document.getElementById('tb').style.display='block';
	}
}

function search(){
	var text = document.getElementById('search').value;
	var details = '';
	for(var i=0; i<studentRegister.length; i++){
		var	fullName = studentRegister[i].fname+ ' ' + studentRegister[i].lname;
		if(fullName == text || studentRegister[i].rollNo == text){
				details = details + '<tr> <td>'+ studentRegister[i].fname +" "+ studentRegister[i].lname +'</td> <td>'+ studentRegister[i].Age +'</td> <td>'+ studentRegister[i].rollNo +'</td> <td>' + studentRegister[i].Gender +'</td> <td> <div><button onclick=displayStudent('+i+') id="displaybtn">display student</button> <button type="button" onclick=editStudent('+i+') id="editbtn">Edit student</button> <button type="button" onclick=deleteStudent('+i+') id="deletebtn">Delete student</button></div> </td> </tr>';
		}
	}
	if(details == ''){
		alert('Student Not Found');
	}else{
		document.getElementById('tablebody').innerHTML = details;
		document.getElementById('tb').style.display = 'block';
	}
	details = '';
	document.getElementById('form').style.display= 'none';
}
 
function displayStudent(index){ 
	document.getElementById('tb').style.display="none"; 
	var	card = '<div id="card"> <div id="cardhead"><h2>Student '+(index+1) +'</h2><h3>Roll No: '+studentRegister[index].rollNo+'</div><hr width="100%" color="grey"><br><div id="cardbody">Student Name: '+studentRegister[index].fname+' '+studentRegister[index].lname+
	'<br>Age: '+studentRegister[index].Age+'<br>Gender: '+studentRegister[index].Gender+'<br><b>Subject Marks-</b><div style="margin-left:50px">Math Mark: '+studentRegister[index].math+'<br>English Mark: '+studentRegister[index].english+'<br>Computer Mark: '+studentRegister[index].computer+'</div>Favourite Subjects: '+studentRegister[index].favSubject+'</div></div>';
	document.getElementById('carddiv').innerHTML = card;
	document.getElementById('carddiv').style.display='block';
}

function editStudent(index){
	document.getElementById('tb').style.display='none';
	document.getElementById('rollno').innerHTML=studentRegister[index].rollNo;

	document.getElementById('fname').value=studentRegister[index].fname;
	document.getElementById('lname').value=studentRegister[index].lname;
	document.getElementById('age').value= studentRegister[index].Age;
	var gen = document.getElementsByName('gender');
	for(var i=0; i<gen.length; i++){
       if(studentRegister[index].Gender == gen[i].value){
       	  gen[i].checked=true;
       }
	}
	document.getElementById('mathmark').value=studentRegister[index].math;
	document.getElementById('englishmark').value=studentRegister[index].english;
	document.getElementById('computermark').value=studentRegister[index].computer;
	var favSub = document.getElementById('favsubject').options;
	//false selected values
	for(var i=0; i<favSub.length; i++){
		favSub[i].selected=false;
	}

	for(var i=0; i<favSub.length; i++){
		for (var j=0; j<studentRegister[index].favSubject.length; j++) {
			if (studentRegister[index].favSubject[j] == favSub[i].value) {
				favSub[i].selected = true;
			}
		}
	}
	document.getElementById('formbtn').innerHTML = '<button type="button" onclick=updateStudent('+index+') id="addbtn">Updade</button>';
	document.getElementById('form').style.display='block';
}

function updateStudent(index){
	document.getElementById('tb').style.display='none';

   	var student = studentRegister[index];

   	student.fname = document.getElementById('fname').value;
   	document.getElementById('fname').value='';

   	student.lname = document.getElementById('lname').value;
   	document.getElementById('lname').value='';

   	student.Age = document.getElementById('age').value;
   	document.getElementById('age').value='';

    var gen = document.getElementsByName('gender');
    for(var i=0; i<gen.length; i++){
    	if (gen[i].checked == true) {
    		student.Gender = gen[i].value;
    	}
    	gen[i].checked = false;
    }

    student.math = document.getElementById('mathmark').value;
    document.getElementById('mathmark').value='';

    student.english = document.getElementById('englishmark').value;
    document.getElementById('englishmark').value='';

    student.computer = document.getElementById('computermark').value;
    document.getElementById('computermark').value='';

    var favSub = document.getElementById('favsubject').options;
	console.log(typeof(favSub))
    student.favSubject = [];
    for(var i=0; i<favSub.length; i++){
    	if (favSub[i].selected == true) {
    		var sub = favSub[i].value;
    		student.favSubject.push(sub);
    	}
    	favSub[i].selected = false;
    }
    alert('Student updated Successfully');
}

function deleteStudent(index){
   	document.getElementById('tb').style.display="none"; 
	var	card = '<div id="card"> <div id="cardhead"><h2>Student '+(index+1) +'</h2><h3>Roll No: '+studentRegister[index].rollNo+'</div><hr width="100%" color="grey"><br><div id="cardbody">Student Name: '+studentRegister[index].fname+' '+studentRegister[index].lname+
	'<br>Age: '+studentRegister[index].Age+'<br>Gender: '+studentRegister[index].Gender+'<br><b>Subject Marks-</b><div style="margin-left:50px">Math Mark: '+studentRegister[index].math+'<br>English Mark: '+studentRegister[index].english+'<br>Computer Mark: '+studentRegister[index].computer+'</div>Favourite Subjects: '+studentRegister[index].favSubject+'</div></div> <div><button type="button" onclick=confirmDelete('+index+') id="confirmdeletebtn">Confirm Delete</button></div>';
	document.getElementById('carddiv').innerHTML = card;
	document.getElementById('carddiv').style.display='block';
}

function confirmDelete(index){
	studentRegister.splice(index,1);
	document.getElementById('carddiv').style.display='none';
	alert('Student deleted Successfully');
}