class Productmanager{
    constructor(){

        this.products = [];

    }

    getproducts(){
        return this.products
    }

    addProduct(title,description,price, stock,id){

        let id_producto = (this.getProducts()).length;

        let producto = {
            title:title,
            price:price,
            description:description,
            code:code,
            id:id,
            stock:stock,
            thumbnail:thumbnail


        }

        this.products.push(producto)
        return this.products;
    }

    getProductsById(id_producto){
        let producto = this.products.find(producto => producto.id == id_producto)
        if (producto){
            return producto;
        }else{
            return console.log("not found")
        }
    }

}


const Productos = new Productmanager()
Productos.addProduct( "Lomo", "ternera", 3490 , 3 );
Productos.addProduct( "colita", "ternera", 3140 , 6);

console.log(Productos.getProductsById(1))


