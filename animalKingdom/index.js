export class Kingdom {
    phylum;
    classification;
    other;
    family;
    genus;
    
    constructor(Phylum, Classification, Other, Family, Genus){
        this.phylum = Phylum;
        this.classification = Classification;
        this.other = Other
        this.family = Family;
        this.genus = Genus;
    
}
reproduction(){
    console.log(`Animal can reproduce ${this.phylum}`)
}

locomotion(){
    console.log(`Animal can move ${this.classification}`)

}
repiration(){
    console.log(`Animal can breath ${this.other}`)

}
Nutrition(){
    console.log(`Animal can feed it self ${this.family}`)

}
inteligence(){
    console.log(`animals are smart ${this.genus}`)
}
}
 