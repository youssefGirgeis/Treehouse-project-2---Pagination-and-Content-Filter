
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


function calculatePagesNumber(students){
	console.log(students);
	pagesNumber = Math.ceil(studentNumber/10);

}

function initialDisplay(){
     
     for(var i=0; i<studentNumber; i++){
        studentList.children[i].style.display = 'none';
    }
    
    for(var i=0; i<10; i++){
        studentList.children[i].style.display = 'block';
    }
    //$('.pagination li a').first().addClass('active');
    var a = document.querySelectorAll('ul li a');
    a[0].classList.add('active');
}


function pagination(studentNumber){

	calculatePagesNumber(studentNumber);

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
    initialDisplay();
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


pagination(studentNumber);
pagesNumbersList.forEach(activePage);





