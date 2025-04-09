class kingdom {
    phylum;
    class;
    other;
    family;
    genus;
    
    constructor(Phylum, Class, Other, Family, Genus)
        this.phylum = Phylum;
        this.class = Class;
        this.other = Other
        this.family = Family;
        this.genus = Genus

reproduction(){
    console.log(`Animal can reproduce ${}`)
}

locomotion(){
    console.log(`Animal can move`)

}
repiration(){
    console.log(`Animal can breath`)

}
Nutrition(){
    console.log(`Animal can feed it self`)

}

class species extends kingdom{
    name;
   

    constructor(Name)
    super(Name,phylum, Class, Other,Family, Genus )
    this.name = Name;

}

}