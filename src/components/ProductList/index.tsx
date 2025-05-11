import { Product } from "../ProductList/type";

interface ProductListProps {
    products: Product[];
    showTitle?: boolean;
}

export const productsMock: Product[] = [
    {
        "name": "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução",
        "price_original": 243.90,
        "price_discounted": 225.90,
        "quantity": 1,
        "image_url": "https://www.lorealprofessionnel.com.br/-/media/master/br/slider/2024/new-slider/dia-color-desktop.jpg",
    },
    {
        "name": "Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml",
        "price": 299.00,
        "quantity": 1,
        "image_url": "https://medias.carolinaherrera.com/cdn-cgi/image/width=480,quality=90,format=auto,fit=contain/medias/sys_master/images/hb4/h55/10462461722654/10462461657118/10462461657118.jpg",
    }
]

export const ProductList: React.FC<ProductListProps> = ({ products, showTitle }) => {
    return (
        <div >
            {showTitle && <h2>Products</h2>}
            {products.map((product) => {
                const priceToShow = product.price_discounted || product.price;
                return (
                    <div >
                        <img src={product.image_url} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="price">R$ {priceToShow?.toFixed(2)}</p>
                        {product.price_original && (
                            <p className="price-original">De: R$ {product.price_original.toFixed(2)}</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}