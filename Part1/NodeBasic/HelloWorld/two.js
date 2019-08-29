//-------------Section 1 -------------------------------------
// function addition(a=0 , b = 1){
//     return a + b ;
// }

// module.exports.add = addition ;

//-------------------------------------------------------------

//------------------Section 2 --------------------------------
function addition(a=0,b=0){
    return a+b;
}

function subtract(a=0,b=0){
    return a-b;
}

module.exports.add = addition;
module.exports.sub = subtract;
//------------------------------------------------------------