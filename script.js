var n1 = document.getElementById("n1").innerHTML = Math.ceil(Math.random() * 20);
var n2 = document.getElementById("n2").innerHTML = Math.ceil(Math.random() * 20);
var n3 = document.getElementById("n3").innerHTML = Math.ceil(Math.random() * 20);

let max = Math.max(n1, n2, n3);

var num1 = document.getElementById("n1n").innerHTML;
var num2 = document.getElementById("n2n").innerHTML;
var num3 = document.getElementById("n3n").innerHTML;

var number;

    if (n1 == max && n2 != max && n3 != max){
        number = num1;
    }

    if (n2 == max && n1 != max && n3 != max){
        number = num2;
    }

    if (n3 == max && n1 != max && n2 != max){
        number = num3;
    }

    if (n1 == max && n2 == max && n3 != max){
        number = num1 + ", " + num2;
    }

    if (n1 != max && n2 == max && n3 == max){
        number = num2 + ", " + num3;
    }

    if (n1 == max && n2 != max && n3 == max){
        number = num1 + ", " + num3;
    }

var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var x = abc.charAt(max - 1);

document.getElementById("greatest").innerHTML = "The album with the most number of people who listened: " + number + " (" + max + ")";
document.getElementById("initial").innerHTML = " The initial of the album's top winner: " + x;

var time = n2 * n3;
var numhrs = (time / 60);
var hr = Math.floor(numhrs);
var nummins = (numhrs - hr) * 60;
var min = Math.round(nummins);

document.getElementById("time").innerHTML = "The time it took for him/her to stream the album: (" + time + " minute/s): " + hr + "hour/s " + min + "minute/s";