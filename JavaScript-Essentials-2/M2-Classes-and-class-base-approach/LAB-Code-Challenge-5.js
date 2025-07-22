/* 
Scenario
Create an ExtendedTutoring class, inheriting from Tutoring.

Equip it with one new method: sendMessages(from, to, message). The from argument is the user (student or teacher) who sends the message. The argument to is the list of recipients (user objects).

Test your solution using the following code:

let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message

*/
function sendEmail(from, to, message) {}

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    addCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                return;
            }
        }
        this.courses.push({course, level});
    }

    removeCourse(course) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses.splice(i,1);
                break;
            }
        }
    }

    editCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }
        }
    }

    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        sendEmail(from.email, this.email, message);
    }

    showMessagesHistory() {
        for(let message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`)
        }
    }
};

class ExtendedUser extends User{
    constructor({name, surname, email, role}){
        super({name, surname, email, role})
    }
    set fullName(fullname)
    {
        let aname = fullname.split(" ")
        this.name = aname[0]
        this.surname = aname[1]
    }
    get fullName()
    {
        return `${this.name} ${this.surname}`
    }

    static match(teacher, student, course)
    {
        let matchArray = []
        for(let sourse of student.courses)
        {
            for (let tsourse of teacher.courses)
            {
                if(sourse.course === tsourse.course)
                {
                    matchArray.push(sourse)
                }
            }
        }
        if (course) {
            for (let mcourse of matchArray) {
                if (mcourse.course === course) {
                    return mcourse;
                }
            }
            return null;
        } else {
            return matchArray;
        }
    }
}

class Teacher extends ExtendedUser{
    constructor({name, surname, email}){
        super({name, surname, email, role: 'teacher'})
    }
}

class Student extends ExtendedUser{
    constructor({name, surname, email}){
        super({name, surname, email, role: "student"})
    }
}
let point = class {}
class Tutoring {
    constructor()
    {
        this.students = [],
        this.teachers = []
    }

    getStudentByName(name, surname)
    {
        let retVal;
        for (let alumno of this.students)
        {
            if (alumno.name === name && alumno.surname === surname)
            {
                retVal = alumno;
            }
        }
        return retVal;
    }
    getTeacherByName(name, surname)
    {
        for (let alumno of this.teachers)
        {
            if (alumno.name === name && alumno.surname === surname)
            {
                return alumno;
            }
        }
        return undefined;
    }
    getStudentsForTeacher(teacher)
    {
        let retVal = [];
        for (let student of this.students)
        {            
            if(ExtendedUser.match(teacher, student).length)
            {
                retVal.push(student);
            }
        }
        return retVal;
    }
    getTeacherForStudent(student)
    {
        let retVal = [];
        for (let teacher of this.teachers)
        {
            if(ExtendedUser.match(teacher, student).length)
            {
                retVal.push(teacher);
            }
        }
        return retVal;
    }
    addStudent(name, surname, email)
    {
        let student = new Student({name: name, surname: surname, email: email})
        this.students.push(student)
    }
    addTeacher(name, surname, email)
    {
        let teacher = new Teacher({name: name, surname: surname, email: email})   
        this.teachers.push(teacher)  
    }
}

class ExtendedTutoring extends Tutoring
{
    constructor(){
        super()
    }
    sendMessages(from, to = [], message)
    {
        if(to.length != 0)
        {    
            for (let too of to)
            {
                too.sendMessage(from, message);
            }
        }
    }
}

let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message

/*---------------------------------------------------------------------------------------*/

class ExtendedTutoring extends Tutoring {
    constructor() {
        super();
    }

    sendMessages(from, to = [], message) {
        if(from && to.length) {
            for(let target of to) {
                target.sendMessage(from, message);
            }
        }
    }
}