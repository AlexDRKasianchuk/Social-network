export const requiredField = value =>{
    if(value) return undefined;
    return 'field is required';
   
}

export const  maxLengthCreator = (maxLength) => (value) =>{
    if(value.length>maxLength) return `Max length is ${maxLength} sumbols`;
    return undefined;
}
