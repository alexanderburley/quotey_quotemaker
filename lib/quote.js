const wikipedia = require("wikijs").default;
module.exports = class Quote {
    constructor(text, author){
        this.text = text;
        this.author = author;
        this.wikipedia = wikipedia();
    }

    async init(){
        try {
            this.page = await this.wikipedia.page(this.author);
            let info = await this.page.info();
            let birthDate = (new Date(info.birthDate.date)).getFullYear();
            let deathDate = (new Date(info.deathDate.date)).getFullYear();
            this.lifespan = `${birthDate} - ${deathDate}`;
        } catch(err){
            console.log(err);
            this.lifespan = "NA";
        }
    }

}    



