var faker = require("faker");

function generateData() {
  var employees = [];
  var departmentData = [
    "Accountant",
    "Software Engineer",
    "Developer",
    "Team Leader"
  ];

  for (var id = 0; id < 3000; id++) {
    let key = faker.random.uuid();
    let city = faker.address.city(1);
    let department = faker.random.arrayElement(departmentData);
    let email = faker.internet
      .email(faker.name.firstName(), faker.name.lastName())
      .toLowerCase();
    let fullName = faker.name.firstName() + " " + faker.name.lastName();
    let gender = faker.random.number({ min: 1, max: 3 }).toString();
    let hireDate = faker.date.between("2019-11-01", "2018-02-10");
    let isPermanent = faker.random.boolean();
    let mobile = faker.phone.phoneNumber("#########");
    employees.push({
      id: key,
      city: city,
      department: department,
      email: email,
      fullName: fullName,
      gender: gender,
      hireDate: hireDate,
      isPermanent: isPermanent,
      mobile: mobile
    });
  }

  return { employees };
}

module.exports = generateData;
