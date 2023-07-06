import { useContext } from 'react';
import { PotionShopContext } from '../Context/AppContext';

export const HeaderComponent = () => {
	const context = useContext(PotionShopContext);
	const { billetera, carrito, setShowCheckout, showCheckout } = context ?? { billetera: 3, setShowCheckout: Boolean };

	const handleShowCheckout = () => setShowCheckout(!showCheckout);

	return (
		<div className="bg-gradient-to-b from-black/80 to-black/30 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
			<h1 className="text-white text-xl font-bold">🧙‍♂️ Potion Shop</h1>
			<div className="flex gap-2 items-center">
				<img src="./gem.png" alt="gema" className="w-12" />
				<span>{billetera} Gemas</span>
			</div>
			<button
				className="text-white hover:underline"
				onClick={handleShowCheckout}
			>
				{showCheckout ? 'Cerrar carrito' : `Ver carrito ${carrito?.length}`}
			</button>
		</div>
	);
};
