var Name = prompt("enter a month");
Name = Name.toLowerCase();
// Name = Name.toUpperCase();
var names = ["january","february","march","april","may","june","july","august","september","october","november","december"];
for(var i = 0 ; i <= 11 ; i++) {
    if (Name === names[i]){
        alert("congratulation")
    }
    else{
        alert("sorry for inconvenience")   
    }
break;
}

