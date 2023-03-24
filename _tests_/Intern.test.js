const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("new intern", () => {
    it("should return the correct name", () => {
      const Tiger =  new Intern("University of Washington", "Tiger", "Tiger@gmail.com", 1234)
        // const result = getName(Tiger)

      expect(Tiger.name).toEqual("Tiger");
    });
    it("should return the correct email", () => {
        const Tiger =  new Intern("University of Washington", "Tiger", "Tiger@gmail.com", 1234)
          const result = Tiger.email
  
        expect(result).toEqual("Tiger@gmail.com");
      });
      it("should return the correct id", () => {
        const Tiger =  new Intern("University of Washington", "Tiger", "Tiger@gmail.com", 1234)
          const result = Tiger.id
  
        expect(result).toEqual(1234);
      });
      it("should return the correct school", () => {
        const Tiger =  new Intern("University of Washington", "Tiger", "Tiger@gmail.com", 1234)
          const result = Tiger.school
  
        expect(result).toEqual("University of Washington");
      });
  });


});