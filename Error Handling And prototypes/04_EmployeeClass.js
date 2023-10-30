class Employee{
    name;
    position;
    salary;
    getsalary(){
        console.log("Salary: ",this.salary);
    }
}

let emp1 = new Employee();
emp1.name = "Ani";
emp1.position = "Developer";
emp1.salary = "80000"
emp1.getsalary();