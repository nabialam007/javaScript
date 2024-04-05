<html>
<head>
	<meta charset="utf-8">
	<title>Student Register</title>
	
</head>
<style>
	*{
	margin: 0px;
	padding: 0px;
}
body{
	background-color: black;
}
.container{
	width: 100%;
	height: 550px;
	background-color: lightblue;
	margin-top: 30px;
}
#head{
	width: 80%;
	height: 80px;
	margin: auto;
	padding: 25px 0px;
	box-sizing: border-box;
	display: flex;
}
#head div{
	width: 34%;
}
.btn{
	padding: 4px 8px;
	color: white;
	background-color: #389538;
	border-radius: 3px;
}
.btn:hover{
	background-color: #024e02;
}
#search{
	width: 250px;
	padding: 4px 5px;
}
.searchbtn{
	padding: 4px 8px;
	color: white;
	background-color: #2424ebe3;
	border-radius: 3px;
}
.searchbtn:hover{
	background-color: #020281e3
}
.content{
	width: 80%;
	height: 460px;
	margin: auto;
	overflow: auto;
}
#form{
	width: 40%;
	margin: auto;
	padding: 25px;
	border-radius: 10px;
	box-shadow: 2px 2px 4px 2px grey;
	background-color: #eee;
	display: none;
}
#form h2{
	display: inline;
	float: left;
}
#form h3{
	display: inline;
	float: right;	
}
.form-group{
	padding: 5px;
}
label{
	width: 120px;
	display: inline-block;
}
.form-control{
	width: 295px;
	height: 20px;
}
#addbtn{
	padding: 5px 12px;
	color: white;
	background-color: #4a81a3;
	border-radius: 3px;
}
#addbtn:hover{
	background-color: #022f4c;
}
#tb{
	display: none;
}
#table{
	width: 100%;
}
table,th,td{
	border: 1px solid grey;
	border-collapse: collapse;
}
th,td{
	text-align: left;
	padding: 5px;
}
#displaybtn{
    padding: 4px 8px;
    color: white;
    background-color: #5383af;
    border-radius: 3px;
}
#displaybtn:hover{
	background-color: #053664;
}
#editbtn{
	padding: 4px 8px;
    color: white;
    background-color: #347e78;
    border-radius: 3px;
}
#editbtn:hover{
    background-color: #05423d;
}
#deletebtn{
	padding: 4px 8px;
    color: white;
    background-color: #e34747;
    border-radius: 3px;
}
#deletebtn:hover{
	background-color: #b10e0e;
}
#card{
	width: 350px;
	height: 295px;
	margin: 50px auto;
	padding: 10px 16px;
	box-sizing: border-box;
	background-color: #eee;
	border-radius: 10px;
	box-shadow: 5px 5px 5px 3px #999999c4;
}
#cardhead h2{
	float: left;
}
#cardhead h3{
	float: right;
	margin-top: 4px;
}
#cardbody{
	line-height: 25px;
	font-size: 18px;
	font-family: sans-serif;
}
#confirmdeletebtn{
	padding: 4px 8px;
	margin: -50px 0px 0px 600px;
	background-color: #fb1a1a;
	color: white;
	border-radius: 3px;
}
#confirmdeletebtn:hover{
	background-color: #ac0202;
}
</style>
<body>
	<div class="container">
		<div id="head">
			<div>
				<h2>Student Register</h2>
			</div>
			<div align='center'>
				<input type="text" id="search" placeholder="Search by RollNo, Name">
				<button type="button" class="searchbtn" onclick="search()">Search</button>
			</div>
			<div align='right'>
				<button onclick="displayAll()" class="btn">Display All Student</button>
				<button onclick="addStudent()" class="btn">Add Student</button>
			</div>
		</div>
		<div class="content">
			<div id="form">
				<div>
					<h2>Student details</h2>
                    <h3>Roll Number: <span id="rollno"></span></h3>
				</div>
				<hr size="2" color="gray" style="margin-bottom: 20px; clear: both;">
				<form>
					<div class="form-group">
						<label for="fname">First Name:</label>
						<input type="text" id="fname" class="form-control">
					</div>
					<div class="form-group">
						<label for="lname">Last Name:</label>
						<input type="text" id="lname" class="form-control">
					</div> 
					<div class="form-group">
						<label for="age">Age:</label>
						<input type="number" id="age" class="form-control">
					</div>
					<div class="form-group">
						<label>Gender:</label>
						<input type="radio" id="male" name="gender" value="Male">
						<label for="male">Male</label>
						<input type="radio" id="female" name="gender" value="Female">
						<label for="female">Female</label>
					</div>
					<div>
						<b>Enter Marks:</b>
					</div>
					<div class="form-group">
						<label for="mathmark">Math Mark:</label>
						<input type="number" id="mathmark" class="form-control">
					</div>
					<div class="form-group">
						<label for="englishmark">English Mark:</label>
						<input type="number" id="englishmark" class="form-control">
					</div>
					<div class="form-group">
						<label for="computermark">Computer Mark:</label>
						<input type="number" id="computermark" class="form-control">
					</div>
					<div class="form-group">
						<label for="favsubject">Favourite Subject:</label>
						<select multiple="" id="favsubject">
							<option>Math</option>
							<option>English</option>
							<option>Computer</option>
							<option>Physics</option>
						</select>
					</div>
					<div align="right" id="formbtn">
						<button type="button" onclick="add()" id="addbtn">Add</button>
					</div>
				</form>
			</div>
			<div id="tb">
				<table id="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
							<th>Roll No.</th>
							<th>Gender</th>
							<th width="320px">Action</th>
						</tr>
					</thead>
					<tbody id="tablebody"></tbody>
				</table>
			</div>
			<div id="carddiv"></div>
		</div>
	</div>
	<script type="text/javascript" src="student.js"></script>
</body>
</html>
