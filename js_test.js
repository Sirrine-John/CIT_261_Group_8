function additionSum(p1){
    var sumVar
    sumVar = p1;
    console.log("sumVarStart : "+sumVar)
    if (isNaN(p1)){
        return "Not a number"
    }
    else{
        for (i=p1;i>0;i--){
            sumVar += parseInt(i)-1;
            console.log("Inside loop number: "+i)
            console.log("Inside loop sumVar: "+sumVar)
        }
        console.log("returning : "+sumVar)
        return sumVar.value;
    }
}
console.log(additionSum(5));