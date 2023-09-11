// prettier-ignore
const r = [
  //. String length range
  /(?=^.{3,20}$)^.*$/
  ,
  //. Disallow leading or trailing whitespace
  /(?!^\s.*$)(?!^.*\s$)^.*$/
  ,
  //. Disallow all whitespace
  /(?!.*\s)^.*$/
  ,
  //. Disallow leading or trailing whitespace while allowing only a single space in middle

  //. Disallow certain words
  /(?!^hello$|^bye$)^.*$/
  ,
  //. Disallow certain words (anywhere in the string)
  /(?!.*hello.*|.*bye.*)^.*$/
  ,
  //. Single word with capital first letter followed by all small letters
  /^[A-Z][a-z]+$/
  ,
  //. Single word with first capital letter followed by small/capital letters
  /^[A-Z][a-zA-Z]+$/
  ,
  //. Multiple words with first letter capital followed by small letters and no leading or trailing whitespace
  /^([A-Z][a-z]+ )*([A-Z][a-z]+)+$/
  ,
  //. Name with/without prefix
  /^([A-Z][a-z]+\. )?([A-Z][a-z]+ )*([A-Z][a-z]+)+$/
  ,
  //. Password Check : 1 uppercase, 1 lowercase, 1 digit, 1 special character, no whitespace
  //. Minimum 8 characters
  /^(?=.*[@$!%*#?&])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$/
  ,
  //. Username Check : with max 2 tlds
  /^[\w]{3,}@[a-z]{3,}(\.[a-z]{2,}){1,2}$/
  ,
  //. Phone number Check : Indian mobile
  /^[789]\d{9}$/
  ,
];
