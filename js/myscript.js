function doAlert(){

    alert('Hi');
    myMessage('Hello');
    
    var myVariable;
    
    myVariable = "Mike";
    
    mySecondMessage(myVariable);
    
    var myData = ['One','Two','Three'];
    
    myThirdMessage(myData[1]);
}


function myMessage(a){

    alert(a);
}

function mySecondMessage(a){
    alert(a);
}

function myThirdMessage(a){
    alert(a);
}