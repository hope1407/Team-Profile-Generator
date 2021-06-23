const Intern = require('../lib/InternClass');

describe('getSchool', () => {
    it('It should return the Intern school', () => {
      // Arrange
      const school = "U of M";
      const testIntern = new Intern("nameInput", 1, "emailInput", school);
      
      // Act
      const testMe = testIntern.school;
      // Assert
      expect(testMe).toBe(school);
    });
  });
  describe('getInternName', () => {
    it('It should get the Intern name', () => {
      // Arrange
      const nameInput = "Johnny"
      const testIntern = new Intern(nameInput, 1, "emailInput", "gitHub");
      
      // Act
      const secondTest = testIntern.name
      
      // Assert
      expect(secondTest).toBe(nameInput)
    });
  });
  describe('getInternEmail', () => {
    it('It should get the Intern email', () => {
      // Arrange
      const emailInput = "Johnny"
      const testIntern = new Intern("nameInput", 1, emailInput, "gitHub");
      
      // Act
      const thirdTest = testIntern.email
      
      // Assert
      expect(thirdTest).toBe(emailInput)
    });
  });
  describe('getInternId', () => {
    it('It should get the Intern ID', () => {
      // Arrange
      const idInput = 2
      const testIntern = new Intern("nameInput", idInput, "emailInput", "gitHub");
      
      // Act
      const fourthTest = testIntern.id
      
      // Assert
      expect(fourthTest).toBe(idInput)
    });
  });