
var mainPage = document.getElementsByClassName('page')[0];
var studentList = document.getElementsByClassName('student-list')[0];
var studentNumber = studentList.children.length;
var pagesNumber;
var pagesList;
var studentListlAsArray = Array.prototype.slice.call(studentList.children);
var details = document.getElementsByClassName('student-details');
var ul = document.createElement('ul');
var btn =document.getElementsByTagName('button')[0];
var input = document.getElementsByTagName('input')[0];


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
    $('.pagination li a').first().addClass('active');
}


function pagination(studentNumber){

	calculatePagesNumber(studentNumber);

	pagesList = document.createElement('ul');
	//document.body.appendChild(pagesList);
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
    
   initialDisplay();
}


$('.pagination li a').click(function(){

    $('.pagination').find('a').removeClass('active');
    $(this).addClass('active');
    
    
    //console.log(pageNumber);
    
    for(var i=0; i<studentNumber; i++){
        studentList.children[i].style.display = 'none';
    }
    
    var pageNumber = parseInt($(this).text());
    var start = (pageNumber * 10) - 10;
    var end = (pageNumber * 10);
    
    for(var i=start; i<end; i++){
        studentList.children[i].style.display = 'block';
    }
    
});


/*---------------------Search----------------------*/

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
    
}



pagination(studentNumber);
