class ProductManager {
    constructor (){
        this.products = [];
        this.id = 1
    }

    addProduct(product){
        let validateCode = this.products.find(elem => elem.code === product.code)//Busca el producto igual según código
        if(validateCode){
            return "This code already exists";
        }
        //Validar propiedades obligatorias
        if (!product.title || !product.description || !product.Image || !product.code || !product.stock){
            return "Fields missing";
        } 

        let newProduct = { ...product, id: this.id} // hago una copia con spread operator y agrego una propiedad id y le doy el valor del id que inicié en constructor
        //product.id = this.id // creo una propiedad y asigno valor asignada desde el constructor(otra forma)
        this.products.push(newProduct);
        this.id++;//una vez agregado el primer producto, incremento el id en uno.
        return "Product added"       

    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        let productId = this.products.find((elem) => elem.id === id);
        if(!productId){
            return "Product not exists"
        }
        return productId;

    }
}

const product ={title: "Maca", description: "Suplemento alimenticio",price: 49.90, Image: "image",code: "mac01", stock:20,}
const product2 ={title:"Algas", description: "Suplemento alimenticio", price: 59.90, Image: "image", code: "alg01", stock:20,}

const productManager = new ProductManager();

console.log(productManager.addProduct(product))
console.log(productManager.addProduct(product2))
console.log(productManager.getProducts())
console.log(productManager.getProductById(2))
