function validEmail(str)
{
    if(typeof str !== "string"){
        return "Invalid";
    }

    const firstChar = str[0];
    if(!['.', '-', '_', '+', '@'].includes(firstChar)){
        if(str.includes('@') && !str.includes(" ") && str.endsWith(".com")){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

const email = validEmail("tr ue@.com")
console.log(email);