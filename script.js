class Person{
    constructor(name, phoneNumber, EmailAddress){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.EmailAddress = EmailAddress;
    }
}

class Professor extends Person{
    constructor(name, phoneNumber, EmailAddress, salary){
        super(name, phoneNumber, EmailAddress);
        this.salary = salary;
    }
}

class Student extends Person{
    constructor(name, phoneNumber, EmailAddress, studentNumber, averageMark){
        super(name, phoneNumber, EmailAddress);
        this.studentNumber = studentNumber;
        this.averageMark = averageMark;
    }

    PersonInfo(){
        return this.name +"\n"+ this.phoneNumber +"\n"+ this.EmailAddress +"\n"+ this.studentNumber +"\n"+ this.averageMark;
    }
}

let student1 = new Student("Ibrahim", 0o5367006227, "ibra1234@gmail.com", 745634, 90)

console.log(student1.PersonInfo());



/////////////////////////////////////////////////////////////////////////////////////////////////////////


function isEven(num) {
    return new Promise((resolve, reject) => {
        if (isNaN(num)) {
            reject('Enter Number');
        } else {
            if (num % 2 === 0) {
                resolve('Success');
            } else {
                resolve('fail');
            }
        }
    });
}

function Check() {
    var x = document.getElementById("input").value;
    isEven(x)
    .then((Success) => {
        document.getElementById("para").textContent = Success;
    })
    .catch((fail) => {
        document.getElementById("para").textContent = fail;
    });
}