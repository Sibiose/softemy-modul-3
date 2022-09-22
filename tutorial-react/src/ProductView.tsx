import { useState } from "react";
import { useToken } from "./TokenContext";


export const ProductView = () => {

    const token = useToken();
    const handleLoadProduct = async () => {
        let res = await loadProduct('1', token);
        if (!res.ok) {
            setProduct({ name: ' - ' });
            return;
        }

        let product = await res.json();
        setProduct(product)
    }

    async function loadProduct(productId: string, token: string) {
        const path = `http://localhost:5000/products/${productId}`;

        const response = await fetch(path, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });
        return response;
    }

    const [product, setProduct] = useState<any>({});
    return (
        token ? <>
            {product.name ? <div>{product.name}</div> : null}
            <br />
            {product.picture ? <img width='200px' height='150px' src={product.picture} alt="" /> : null}
            <br />
            <button onClick={handleLoadProduct}> Load Product</button>
        </> : null
    )
}