
var mainPage = document.getElementsByClassName('page')[0];
var studentList = document.getElementsByClassName('student-list')[0];
var studentNumber = studentList.children.length;
var pagesNumber;
var pagesList;
var studentListlAsArray = Array.prototype.slice.call(studentList.children);

//studentListlAsArray.style.display = 'none';

//studentList.style.display = 'none';

function activePage(){

	for(var i=0; i<pagesList; i++){

	}

}

for(var i=10; i<studentNumber; i++){

	studentList.children[i].style.display = 'none';
}

function calculatePagesNumber(students){
	console.log(students);
	pagesNumber = Math.ceil(studentNumber/10);

}

function pagination(studentNumber){

	calculatePagesNumber(studentNumber);

	pagesList = document.createElement('ul');
	//document.body.appendChild(pagesList);
	pagesList.setAttribute('class', 'pagination');

	for(var i=0; i<pagesNumber; i++){

		var page = document.createElement('li');
		var linkNumber = document.createElement('a');
		var number = document.createTextNode(i+1);
		linkNumber.appendChild(number);
		page.appendChild(linkNumber);
		pagesList.appendChild(page);
		mainPage.appendChild(pagesList);
	}
	//$('.pagination li a').first().addClass('active');
	var a = document.getElementsByClassName('pagination')[0].children[0].querySelector('a');
	a.classList.add('active');
	activePage(a);
}

pagination(studentNumber);



/*---------------------Search----------------------*/

var details = document.getElementsByClassName('student-details');
var studentList = document.getElementsByClassName('student-list')[0];
var ul = document.createElement('ul');

btn.onclick = function(){
    
    var count =0;
    //studentList.style.display = 'none';
    for(var i=0; i<studentList.children.length; i++){
        //console.log(details[i].children[1].innerHTML);
        var studentName = details[i].children[1].innerHTML;
        if(studentName.indexOf(input.value) !== -1){
            console.log(studentName);
            count++;
            var studentItem = studentList.children[i];
            studentItem.style.display = 'block';
            ul.appendChild(studentItem);
            
            //studentList.children[i].style.display = 'block';
        }else{
            //studentList.children[i].style.display = 'none';
        }
    }
    studentList.style.display = 'none';
    document.getElementsByClassName('page')[0].appendChild(ul);
    ul.setAttribute = ('class', 'student-list');
    //ul.style.display = 'block';
    //numberOfStudents = count;
    
}




