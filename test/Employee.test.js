const Employee = require('../lib/EmployeeClass');

describe('getEmployeeName', () => {
  it('It should get the Employee name', () => {
    // Arrange
    const nameInput = "Johnny"
    const testEmployee = new Employee(nameInput, 1, "emailInput", "gitHub");

    // Act
    const secondTest = testEmployee.name

    // Assert
    expect(secondTest).toBe(nameInput)
  });
});
describe('getEmployeeEmail', () => {
  it('It should get the Employee email', () => {
    // Arrange
    const emailInput = "Johnny"
    const testEmployee = new Employee("nameInput", 1, emailInput, "gitHub");

    // Act
    const thirdTest = testEmployee.email

    // Assert
    expect(thirdTest).toBe(emailInput)
  });
});
describe('getEmployeeId', () => {
  it('It should get the Employee ID', () => {
    // Arrange
    const idInput = 2
    const testEmployee = new Employee("nameInput", idInput, "emailInput", "gitHub");

    // Act
    const fourthTest = testEmployee.id

    // Assert
    expect(fourthTest).toBe(idInput)
  });
  });