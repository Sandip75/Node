//-------------Section 1 -------------------------------------
// function addition(a=0 , b = 1){
//     return a + b ;
// }

// module.exports.add = addition ;

//-------------------------------------------------------------

//------------------Section 2 --------------------------------
// function addition(a=0,b=0){
//     return a+b;
// }

// function subtract(a=0,b=0){
//     return a-b;
// }

// module.exports.add = addition;
// module.exports.sub = subtract;

// Note : We will use section 3 rather then using two times module.exports
//------------------------------------------------------------


//-------------------Section 3 -------------------------------
const object = {
    add(a=0,b=0){
        return a + b ;
    },
    sub(a=0,b=0){
        return a-b;
    }
}

module.exports = object;
//-----------------------------------------------------------