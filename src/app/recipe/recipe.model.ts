export class Recipe{

    public name: string;
    public description: string;
    public imgsource: string;
    public difficulty: string;

    constructor(name: string, description: string, imgsource: string, difficulty: string){
        this.name = name;
        this.description = description;
        this.imgsource = imgsource;
        this.difficulty = difficulty;
    }
}