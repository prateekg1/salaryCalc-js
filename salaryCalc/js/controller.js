 window.addEventListener("DOMContentLoaded",init);

 function init(){
     bindEvents();
     fillWithZeros();
 }

   function computeSalary() {
    var salary = document.querySelector("#salary").value;
    console.log("compute Call " + salary);
    salaryOperations.takeSalary(parseFloat(salary));
    printResult();
}

function fillWithZeros(){
    var spans = document.querySelectorAll("span");
    for(let span of spans){
        span.innerText='0';
    }
}

function printResult(){

for(let key in salaryOperations){
    if(typeof salaryOperations[key]==="function"){
        if(key=='takeSalary'){
            continue;
        }
        document.querySelector('#'+key).innerHTML = salaryOperations[key]();
    }
}
}

function bindEvents(){
    document.querySelector("#compute").addEventListener("click",computeSalary);
}
