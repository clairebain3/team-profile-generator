const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("new employee", () => {
    it("should return the correct name", () => {
      const Tiger =  new Employee("Manager", "Tiger", "Tiger@gmail.com", 1234)
        // const result = getName(Tiger)

      expect(Tiger.getName).toEqual("Tiger");
    });
    it("should return the correct email", () => {
        const Tiger =  new Employee("Manager", "Tiger", "Tiger@gmail.com", 1234)
          const result = getEmail(Tiger)
  
        expect(result).toEqual("Tiger@gmail.com");
      });
      it("should return the correct id", () => {
        const Tiger =  new Employee("Manager", "Tiger", "Tiger@gmail.com", 1234)
          const result = getId(Tiger)
  
        expect(result).toEqual(1234);
      });
  });


});
