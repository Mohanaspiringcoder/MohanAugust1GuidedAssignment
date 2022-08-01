export class Product {
    constructor(public id :number,
        public sku :string,
        public name :string,
        public description :string,
        public unitprice :number,
        public imageurl : string,
        public active :boolean,
        public unitsinstock :number,
        public datecreated :Date,
        public lastupdate :Date,
        public categoryid :number){}
}
