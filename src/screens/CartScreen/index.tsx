import { ProductList } from "../../components/ProductList";
import { productsMock } from "../../components/ProductList";

const CartScreen: React.FC = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <ProductList products={productsMock} showTitle={true} />
        </div>
    )
}

export default CartScreen;