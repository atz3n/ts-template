export default class Greeter {
    private text = "";


    constructor(text: string) {
        this.text = text;
    }

    public greet(): string {
        return this.text;
    }
}