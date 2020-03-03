
function reduceProduct(){
    reduce = getItem();
    if(reduce === '0'){
        return;
    }else{
        reduce--;
        document.querySelector('#item1Quantity').innerHTML = reduce;
    }
    account();
}

function addProduct(){
    var reduce = document.querySelector('#item1Quantity').innerText;
    reduce++;
    document.querySelector('#item1Quantity').innerHTML = reduce;
    account();
}

function account(){

    var items = getItem();
    
    var price = items*300;

    document.querySelector('#item1Price').innerHTML = price;
    
}


function getItem(){
   return document.querySelector('#item1Quantity').innerHTML;   
}

function selectAllSkills(){
    var skills = document.querySelectorAll('.skill');
    for (var i = 0; i < skills.length; i++) {
        var s = skills[i];
        s.checked = true;
    }
}






