const path = './dbjson/cartsDb.json'

class CartManagerFs{
    constructor(){
        this.path = path;
    }

    readCart = async () =>{
        try {
            const cartJson = await fs.promises.readFile(path, 'utf-8'); //aca los productos vienen en formato json
            const cartJs = JSON.parse(cartJson); //lo paso a formato js 
            return cartJs;
        } catch (error) {
            return [];
        }
        
    }
    createCart          = async () =>{}
    getCartById         = async () =>{}
    createProductToCart = async () =>{}

}
