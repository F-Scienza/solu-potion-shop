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
			} checkout-detail scrollable-cards flex-col items-center fixed right-2 border border-black rounded-lg bg-black/40 h-4/5 z-20 w-60`}
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
			<button className='bg-white font-black' onClick={handleCompra}> comprar </button>
		</aside>
	);
};
