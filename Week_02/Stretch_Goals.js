const calculator = {
    add : function(p1,p2) { 
        if (isNaN(p1) || isNaN(p2)){return "Cannot add " + p1 + " to " + p2}
        else{return p1+"+"+p2+"="+ (parseInt(p1) + parseInt(p2));}},

    subtract : function(leftVar,rightVar) {  
        if (isNaN(leftVar) || isNaN(rightVar)){return "Cannot Subtract " + rightVar + " from " + leftVar}
        else{return leftVar+"-"+rightVar+"="+ (parseInt(leftVar) - parseInt(rightVar));}},

    multiply : function(p1,p2) {if (isNaN(p1) || isNaN(p2)){return "Cannot Multiply " + p1 + " with " + p2}
        else{return p1+"*"+p2+"="+ (parseInt(p1) * parseInt(p2));}},

    devide : function(dividend,divisor) {if (isNaN(dividend) || isNaN(divisor)){return "Cannot divide " + dividend + " by " + divisor}
        else if (divisor == 0){return "Cannot devide by 0"}
        else{return dividend+"/"+divisor+"="+ (parseInt(dividend) / parseInt(divisor));}},

    exponent : function(base,exp) { 
        // code to implement exponent
        return "Not Implemented";
    },
    root : function(base,rt) { 
        // code to implement root
        return "Not Implemented";
    },
    modulo : function(base,mod) { 
        // code to implement modulo
        return "Not Implemented";
    }
};

console.log(calculator.add(4,5));
console.log(calculator.add("grass","mower"));
console.log(calculator.subtract(9,2));
console.log(calculator.subtract("grandma","dentures"));
console.log(calculator.multiply(5,50));
console.log(calculator.multiply("boy Rabbit","girl Rabbit"));
console.log(calculator.devide(10,2));
console.log(calculator.devide(0,50));
console.log(calculator.devide(50,0));