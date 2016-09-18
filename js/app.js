
var mainPage = document.getElementsByClassName('page')[0];
var studentList = document.getElementsByClassName('student-list')[0];
var studentNumber = studentList.children.length;
var pagesNumber;
var pagesList;
var details = document.getElementsByClassName('student-details');
var ul = document.createElement('ul');
var btn =document.getElementsByTagName('button')[0];
var input = document.getElementsByTagName('input')[0];
var pagesNumbersList;
var counter = 0;


function calculatePagesNumber(students){
	console.log(students);
	pagesNumber = Math.ceil(students/10);
    console.log(pagesNumber);
}

function initialDisplay(students){
    studentNumber = students;
    console.log('intit');

     for(var i=0; i<students; i++){
        studentList.children[i].style.display = 'none';
    }
    
    for(var i=0; i<10; i++){
        studentList.children[i].style.display = 'block';
    }
    var a = document.querySelectorAll('ul li a');
    a[0].classList.add('active');
}


function pagination(students){

	calculatePagesNumber(students);

	pagesList = document.createElement('ul');
	pagesList.setAttribute('class', 'pagination');

	for(var i=0; i<pagesNumber; i++){
		var page = document.createElement('li');
		var linkNumber = document.createElement('a');
        linkNumber.setAttribute('href', '#')
		var number = document.createTextNode(i+1);
		linkNumber.appendChild(number);
		page.appendChild(linkNumber);
		pagesList.appendChild(page);
		mainPage.appendChild(pagesList);
	}
    pagesNumbersList = document.querySelectorAll('ul li a');
    pagesNumbersList.forEach(activePage);
    initialDisplay(students);
}

function activePage(item){
    item.onclick = function(){
         for(var i=0; i<studentNumber; i++){
            studentList.children[i].style.display = 'none';
        }
        
        for(var i=0; i<pagesNumbersList.length; i++){
            pagesNumbersList[i].classList.remove('class', 'active');
        }
        
        item.classList.add('active');
        var pageNumber = parseInt(item.innerHTML);
        var start = (pageNumber * 10) - 10;
        var end = (pageNumber * 10);
        for(var i=start; i<end; i++){
            studentList.children[i].style.display = 'block';
        }
    }
}

function search(){
    for(var i=0; i<studentList.children.length; i++){
        var studentName = details[i].children[1].innerHTML;
        var studentItem = studentList.children[i];
        if(studentName.indexOf(input.value.toLowerCase()) !== -1 && input.value.length !== 0){
            studentItem.style.display = 'block';
            
        }else{
            studentList.children[i].style.display = 'none';
        }
    }
    
    if(input.value === ""){
        studentList.style.display = 'block';
        pagination(studentList.children.length);
        
    }else{
        studentList.style.display = 'block';
        mainPage.removeChild(pagesList);
    }
}

btn.addEventListener('click', search);
pagination(studentNumber);






