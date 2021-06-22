const Engineer = require('../lib/engineerClass');

describe('getOfficeNumber', () => {
    it('It should return the manager answers', () => {
      // Arrange
      const oInput = 25;
      const nameInput = "Johnny"
      const emailInput = "a@a.com"
      const testManager = new Manager(nameInput, 1, emailInput, oInput);
      
      // Act
      const testMe = testManager.getOfficeNumber();
      const secondTest = testManager.name
      
      // Assert
      expect(testMe).toBe(oInput);
      expect(secondTest).toBe(nameInput)
    });
  });
  describe('getManagerName', () => {
    it('It should get the Manager name', () => {
      // Arrange
      const nameInput = "Johnny"
      const testManager = new Manager(nameInput, 1, "emailInput", "oInput");
      
      // Act
      const secondTest = testManager.name
      
      // Assert
      expect(secondTest).toBe(nameInput)
    });
  });
  describe('getManagerEmail', () => {
    it('It should get the Manager email', () => {
      // Arrange
      const emailInput = "Johnny"
      const testManager = new Manager("nameInput", 1, emailInput, "oInput");
      
      // Act
      const thirdTest = testManager.email
      
      // Assert
      expect(thirdTest).toBe(emailInput)
    });
  });
  describe('getManagerId', () => {
    it('It should get the Manager ID', () => {
      // Arrange
      const idInput = 2
      const testManager = new Manager("nameInput", idInput, "emailInput", "oInput");
      
      // Act
      const fourthTest = testManager.id
      
      // Assert
      expect(fourthTest).toBe(idInput)
    });
  });