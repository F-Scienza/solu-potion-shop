import { useContext } from 'react';
import { PotionShopContext } from '../Context/AppContext';
import CheckoutCard from './CheckoutCard';
import { Product } from '../Types';

export const CarritoComponent = () => {
	const context = useContext(PotionShopContext);
	const { showCheckout, setShowCheckout, carrito, handleCompra } = context ?? {
		showCheckout: false,
		setShowCheckout: Boolean,
		carrito: [],
	};

	const handleCheckout = () => setShowCheckout(!showCheckout);

	return (
		<aside
			className={`${
				showCheckout ? 'flex' : 'hidden'
			} checkout-detail scrollable-cards flex-col items-center fixed right-4 border border-black rounded-lg bg-black/40 h-4/5 z-20 w-60`}
		>
			<h2 className="text-lg font-semibold mt-4">Carrito</h2>
			<div className="flex justify-between p-4">
				<span
					onClick={handleCheckout}
					className="cursor-pointer right-3 top-3 absolute"
				>
					x
				</span>
			</div>
			<div className="px-2 ">
				{carrito.map((prod: Product) => (
					<CheckoutCard
						key={prod.id}
						id={prod.id}
						nombre={prod.nombre}
						imagen={prod.imagen}
						precio={prod.precio}
						categoria={prod.categoria}
						descripcion={prod.descripcion}
					/>
				))}
			</div>
			<button
				onClick={handleCompra}
				className="relative inline-flex items-center justify-center p-0.5  mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-600 to-orange-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-900"
			>
				<span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Comprar
				</span>
			</button>
		</aside>
	);
};
