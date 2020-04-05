var Employee = /** @class */ (function () {
    function Employee(first, last, age, phone, state, zip, job, wage) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.phoneNumber = phone;
        this.state = state;
        this.zipCode = zip;
        this.occupation = job;
        this.hourlyWage = wage;
    }
    Employee.prototype.details = function () {
        var details = this.firstName + " " + this.lastName + ", " + this.age + " years old.";
        return details;
    };
    Employee.prototype.getJob = function () {
        var jobDetails = this.details() + " Occupation: " + this.occupation + " State: " + this.state + " Zip Code: " + this.zipCode;
        return jobDetails;
    };
    Employee.prototype.getWage = function (hours) {
        if (hours === void 0) { hours = 40; }
        var weeklyWage = hours * this.hourlyWage;
        return weeklyWage;
    };
    Employee.prototype.addCerts = function (certs) {
        var string = certs;
        var totalCerts = string.split(",");
        return totalCerts;
    };
    return Employee;
}());
function getEmployee(employeeObj) {
    return employeeObj;
}
var user1 = new Employee("John", "Doe", 42, 1234567890, "NC", 28211, "FBI Agent", 50);
document.getElementById("2").innerHTML = user1.details();
var user2 = new Employee("Sam", "Smith", 35, 1333452313, "NY", 12341, "Musician", 100);
document.getElementById("3").innerHTML = user2.getJob();
var user3 = new Employee("Laura", "Croft", 29, 7283565890, "CA", 45675, "Hero", 500);
document.getElementById("4").innerHTML = user3.getJob();
