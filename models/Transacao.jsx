export default class Trasacao {
    constructor(description, value, type, id) {
        this.id = id|| this.generedId();
        this.description = description;
        this.value = value;
        this.type = type;
    }
    generedId() {
        return Math.floor(Math.random() * 100000)
    }
}