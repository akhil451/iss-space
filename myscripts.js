$(document).ready(function(){
    var url="http://api.open-notify.org/astros.json";
var spacedata=
   $.getJSON("http://api.open-notify.org/astros.json",function(data){
console.log(data);
spacedata=data;
//console.log(spacedata);
 $(".number").html(data.number);
 var stringnames=[];
for(i=0;i<data.number;i++)
{
stringnames[i]=(data.people[i].name+'<br/>');
}
console.log(stringnames.join(""));
$(".names").html(stringnames.join(""));


   },'jsonp');



});