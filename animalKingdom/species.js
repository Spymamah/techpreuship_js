import { Kingdom } from './index.js';


class species extends Kingdom{
    name;
   

    constructor(Name, Phylum, Classification, Other, Family, Genus ){
    super(Phylum, Classification, Other, Family, Genus )
    this.name = Name;

}

}

let species1 = new species('Mamah', "negative", "human", "nothing", 20,"yes" );
console.log("these are there characteristics:", species1)