class car{
    company;
    year;
    model;

    getdescription(){
        console.log(`This is a ${this.year} ${this.company} ${this.model}.`);
    }
}

let c1 = new car();
c1.company = "Honda";
c1.model = "City"
c1.year = 2023

c1.getdescription()