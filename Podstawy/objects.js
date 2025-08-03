const mathew = {
    firstName: `Mathew`,
    lastName: `Kurdyk`,
    job: `IT specialist`,
    age: 2005,
    driverlicense: true,
    firends: [`natan`,`dawid`,`oskar`,`kacper`],

    // calcAge: function (brithYears){
    //     return 2037-this.age;
    // }
    // NEW VERSION
    // calcAge: function (brithYears){
    //     return 2037-this.age;
    // //this mozna uzywac w elemencie do korzystania z prowadoncyh juz wartosci
    // //pozwala na uzycie funkcji nie tylko w jednym matthew ale takze innych elementach
    // //bez zmian w kodzie
    // }
        calcAge: function (brithYears){
        this.aged = 2037-this.age;
        return this.aged;
        },
        basicInfo: function (){
            return `${this.firstName} is a ${this.calcAge()} years ${this.job} and he has ${this.driverlicense ? 'a' : 'no'} driver's license.`;
        }
}

//funkcja zwracajaca imie wiek zawod i prawojazdy

console.log(mathew.basicInfo());
console.log(mathew.calcAge());
//console.log(mathew['calcAge']());

const nameKey = 'Name';
console.log(mathew['first' + nameKey]);
console.log(mathew['last' + nameKey]);

const info = prompt(`What do you want to know about mathew. Chose firstName, lastName, job, age, friends`);
console.log(info);

if (mathew[info]){
console.log(mathew[info]);
}else{
    alert ("You chose wrong. Chose firstName, lastName, job, age, friends");
}
// Mathew have 4 friends and his best friend called 
 //console.log(mathew.firends.length);
console.log(mathew.firstName+' have '+mathew.firends.length+' friend and his best called '+mathew.firends[0] );
console.log(`${mathew.firstName} have ${mathew.firends.length} friend and his best called ${mathew.firends[0]}`);

