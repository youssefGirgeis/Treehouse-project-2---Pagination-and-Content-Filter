//var numberOfStudents = document.getElementsByClassName('student-item').length;
//var numberOfPages = Math.floor(numberOfStudents/10);

var numberOfStudents = $('.student-item').length;
var numberOfPages = Math.ceil(numberOfStudents/10);
var listOfStudents = $('.student-list');
var btn = document.getElementById('search-button');
var input = document.getElementsByTagName('input')[0];


listOfStudents.children().css('display', 'none');
listOfStudents.children().slice(0,10).css('display', 'block');
//console.log(listOfStudents.children().slice(10,22));



$('.page').append('<ul class="pagination"></ul>');

for(var i=1; i<=numberOfPages; i++){
    $('.pagination').append('<li><a href="#">' + i + '</a></li>');
}

$('.pagination li a').first().addClass('active');
//$('.student-item').slice(0,11);



$('.pagination li a').click(function(){
    listOfStudents.children().css('display', 'none');
    $('.pagination').find('a').removeClass('active');
    $(this).addClass('active');
    
    //console.log(parseInt($(this).text()) + 10);
    
    var pageNumber = parseInt($(this).text());
    //console.log(pageNumber);
    
    if(pageNumber === 1){
        listOfStudents.children().slice(0,10).css('display', 'block');
    }
    else{
    
        listOfStudents.children().slice((pageNumber*10)-10,pageNumber*10).css('display', 'block');
    }
});


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




