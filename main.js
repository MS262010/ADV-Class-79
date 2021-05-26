array_of_names=[]
function submit(){
    var name1=document.getElementById("student_name1").value;
    var name2=document.getElementById("student_name2").value;
    var name3=document.getElementById("student_name3").value;
    var name4=document.getElementById("student_name4").value;
    array_of_names.push(name1);
    array_of_names.push(name2);
    array_of_names.push(name3);
    array_of_names.push(name4);
    console.log(array_of_names);
    document.getElementById("display_names").innerHTML=array_of_names;
    document.getElementById("btnSubmit").style.display="none";
    document.getElementById("btnSort").style.display="inline-block";
}
function sorting(){
array_of_names.sort();
console.log(array_of_names);
document.getElementById("display_names").innerHTML=array_of_names;
}