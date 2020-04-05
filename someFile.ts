
interface EmployeeOptions {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: number;
    state?: string;
    zipCode?: number;
    occupation?: string;
    hourlyWage?: number;
}



class Employee implements EmployeeOptions  {
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    state: string;
    zipCode: number;
    occupation: string;
    hourlyWage: number;
    

    constructor(first: string, last: string, age: number, phone: number, state: string, zip: number, job: string, wage: number){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.phoneNumber = phone;
        this.state = state;
        this.zipCode = zip;
        this.occupation = job;
        this.hourlyWage = wage;
        
    }   

    details(): string {
        var details: string = this.firstName + " " + this.lastName + ", " + this.age + " years old.";
        return details;
    }

    getJob(): string {
        var jobDetails: string = this.details() + " Occupation: " + this.occupation + " State: " + this.state + " Zip Code: " + this.zipCode;
        return jobDetails;
    }

    getWage(hours = 40): any {
        var weeklyWage: number = hours * this.hourlyWage;
        return weeklyWage;
    }

    addCerts(certs: any): string[] {
        let string = certs;
        let totalCerts: string[] = string.split(",");
        return totalCerts; 
    }
   
}
    function getEmployee(employeeObj: EmployeeOptions): any {
        type employeeObj = [keyof EmployeeOptions];
        return employeeObj;
}

    var user1 = new Employee("John", "Doe", 42, 1234567890, "NC", 28211, "FBI Agent", 50); 
    document.getElementById("2").innerHTML = user1.details();
   

    var user2 = new Employee("Sam", "Smith", 35, 1333452313, "NY", 12341, "Musician", 100);
    document.getElementById("3").innerHTML= user2.getJob();
    

    var user3 = new Employee("Laura", "Croft", 29, 7283565890, "CA", 45675, "Hero", 500);
    document.getElementById("4").innerHTML= user3.getJob();
   



   


 