import { createContext, useEffect, useState } from 'react';
import {
	Product,
	PotionShopContextInt,
	PotionShopContextProviderProps,
} from '../Types';
import axios from 'axios';

export const PotionShopContext = createContext<PotionShopContextInt | null>(
	null
);

export const PotionShopProvider = ({
	children,
}: PotionShopContextProviderProps) => {
	const [products, setProducts] = useState([]);
	const [showCheckout, setShowCheckout] = useState(false);
	const [billetera, setBilletera] = useState(3);
	const [carrito, setCarrito] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	// get
	useEffect(() => {
		axios({
			url: 'http://localhost:3001/productos',
		})
			.then(response => {
				setProducts(response.data);
				setLoading(false);
			})
			.catch(error => console.log(error));
	}, []);

	// post
	const [itemsId, setItemsId] = useState<number[]>([]);

	const handleCompra = () => {
		const data = {
			itemsId,
		};
		console.log(data)
		axios
			.post('http://localhost:3001/compras', data)
			.then(response => {
				console.log('Compra realizada:', response.data);
			})
			.catch(error => {
				console.error('Error al realizar la compra:', error);
			});
	};
	////
	const contextValue: PotionShopContextInt = {
		products,
		billetera,
		setBilletera,
		carrito,
		setCarrito,
		showCheckout,
		setShowCheckout,
		loading,
		setLoading,
		itemsId,
		setItemsId,
		handleCompra,
	};

	return (
		<PotionShopContext.Provider value={contextValue}>
			{children}
		</PotionShopContext.Provider>
	);
};

export default PotionShopProvider;
