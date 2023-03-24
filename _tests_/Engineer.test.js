const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("new engineer", () => {
    it("should return the correct name", () => {
      const Tiger =  new Engineer("github/tiger", "Tiger", "Tiger@gmail.com", 1234)
        // const result = getName(Tiger)

      expect(Tiger.name).toEqual("Tiger");
    });
    it("should return the correct email", () => {
        const Tiger =  new Engineer("github/tiger", "Tiger", "Tiger@gmail.com", 1234)
          const result = Tiger.email
  
        expect(result).toEqual("Tiger@gmail.com");
      });
      it("should return the correct id", () => {
        const Tiger =  new Engineer("github/tiger", "Tiger", "Tiger@gmail.com", 1234)
          const result = Tiger.id
  
        expect(result).toEqual(1234);
      });
      it("should return the correct github", () => {
        const Tiger =  new Engineer("github/tiger", "Tiger", "Tiger@gmail.com", 1234)
          const result = Tiger.github
  
        expect(result).toEqual("github/tiger");
      });
  });


});