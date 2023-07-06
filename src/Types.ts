export interface Product {
	id: number;
	nombre: string;
	precio: number;
	categoria: string;
	descripcion: string;
	imagen: string;
}
export interface PotionShopContextInt {
	products: Product[];
	carrito: Product[];
	billetera: number;
	setBilletera: React.Dispatch<React.SetStateAction<number>>;
	setCarrito: React.Dispatch<React.SetStateAction<Product[]>>;
	showCheckout: boolean;
	setShowCheckout: React.Dispatch<React.SetStateAction<boolean>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	itemsId: number[];
	setItemsId: React.Dispatch<React.SetStateAction<number[]>>;
	handleCompra: ()=>void
}

export type PotionShopContextProviderProps = {
	children: React.ReactNode;
};
