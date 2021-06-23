const Engineer = require('../lib/engineerClass');

describe('getGithub', () => {
    it('It should return the engineer github url', () => {
      // Arrange
      const gitHub = "hope1407";
      const testEngineer = new Engineer("nameInput", 1, "emailInput", gitHub);
      
      // Act
      const testMe = testEngineer.github;
      // Assert
      expect(testMe).toBe(gitHub);
    });
  });
  describe('getEngineerName', () => {
    it('It should get the Engineer name', () => {
      // Arrange
      const nameInput = "Johnny"
      const testEngineer = new Engineer(nameInput, 1, "emailInput", "gitHub");
      
      // Act
      const secondTest = testEngineer.name
      
      // Assert
      expect(secondTest).toBe(nameInput)
    });
  });
  describe('getEngineerEmail', () => {
    it('It should get the Engineer email', () => {
      // Arrange
      const emailInput = "Johnny"
      const testEngineer = new Engineer("nameInput", 1, emailInput, "gitHub");
      
      // Act
      const thirdTest = testEngineer.email
      
      // Assert
      expect(thirdTest).toBe(emailInput)
    });
  });
  describe('getEngineerId', () => {
    it('It should get the Engineer ID', () => {
      // Arrange
      const idInput = 2
      const testEngineer = new Engineer("nameInput", idInput, "emailInput", "gitHub");
      
      // Act
      const fourthTest = testEngineer.id
      
      // Assert
      expect(fourthTest).toBe(idInput)
    });
  });