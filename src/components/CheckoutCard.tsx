import { useContext } from 'react';
import { PotionShopContext } from '../Context/AppContext';
import { Product } from '../Types';

const CheckoutCard = (props: Product) => {
	const context = useContext(PotionShopContext);
	const { nombre, imagen, precio, id } = props;
	const { carrito, setCarrito, setBilletera, billetera } = context ?? {
		carrito: [],
		setCarrito: Boolean,
		billetera: 0,
		setBilletera: Boolean,
	};

	const handleDelete = () => {
		const filterProducts = carrito.filter((prod:Product) => prod.id !== id);
		setCarrito(filterProducts);
		setBilletera(billetera + precio);
	};

	return (
		<div className="w-full mb-2 py-2 flex justify-between items-center">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-scale-down"
						src={imagen}
						alt={nombre}
					/>
				</figure>
				<p className="text-sm font-light"> {nombre} </p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-medium px-2">{precio}</p>
				<span className="cursor-pointer" onClick={handleDelete}>
					❌
				</span>
			</div>
		</div>
	);
};

export default CheckoutCard;
