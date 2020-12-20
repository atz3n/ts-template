import Greeter from "../src/Greeter";


it("greets the world", () => {
    const greeterText = "Hello World!";
    const worldGreeter = new Greeter(greeterText);
    expect(worldGreeter.greet()).toEqual(greeterText);
});