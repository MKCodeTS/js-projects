//similar to the Facebook like button , this function returns who likes the post and how many people like it.
//either no one, 1 person , 2 or 2 or more + their names 

function likes(names){
    switch(names.length){
        case 0:
            return "no one likes this";
            break;
        case 1:
            return `${names[0]} likes it`; 
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`
            break;
        case 3:
            return `${names[0]} , ${names[1]} , and ${names[2]} like it `
            break;
        }
    if (names.length > 3) {
        return`${names[0]} , ${names[1]} and ${names.length -2} like this`
    }    
}
console.log(likes(["james", "amy", "Mariola", "Weronika", "Maria", "joe"]))