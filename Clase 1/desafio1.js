class Productmanager{
    constructor(){

        this.products = [];

    }

    getProducts(){
        return this.products
    }

    addProduct(title,description,price, thumbnail, stock, code , ){

        let id_producto = this.getProducts().length;

        let producto = {
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            stock:stock,
            code:code,
            id: ++id_producto
            
        }

        if (!title|| !description || !price || !code || !stock) {
            return console.log ( `Todos los campos son obligatorios.`)
        }

        let codigo = this.products.find((prod) => prod.code == producto.code)
            if (codigo){
                return console.log ("El codigo ya existe, ingrese uno nuevo")
            }else{
                this.products.push(producto);
                return this.products;
            }
                

    }
        
        getProductsById(id_producto){

            let producto = this.products.find(producto => producto.id === id_producto)

            if(producto){
                return producto;
            }else {
                return console.log("not found");
            }

        }
    
}



const Productos = new Productmanager()
Productos.addProduct( "Lomo", "Carne de ternera de primera calidad ", 3490 , "#" , 4 , 20 ,  );
Productos.addProduct( "Colita de Cuadril", "Carne de ternera de primera calidad" , 3140 , "#", 6 , 30 )
Productos.addProduct( "Solomillo", "Carne de cerdo de primera calidad" , 3490 , "#", 4 , 40 )

console.log(Productos)



