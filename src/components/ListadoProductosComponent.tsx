import { useContext } from 'react';
import { PotionShopContext } from '../Context/AppContext';
import { Product } from '../Types';
import Card from './Card';
import LoadingCircle from './LoadingCircle';
import NotCard from './NotCard';

export const ListadoProductosComponent = (): JSX.Element => {
	const context = useContext(PotionShopContext);
	const { products, loading } = context ?? { products: [] };

	return (
		<div className="grid gap-4 grid-cols-3  w-full max-w-screen-lg">
			{loading === true ? (
				<LoadingCircle />
			) : products.length === 0 ? (
				<NotCard />
			) : (
				products?.map((prod: Product) => (
					<Card
						key={prod.id}
						id={prod.id}
						nombre={prod.nombre}
						precio={prod.precio}
						categoria={prod.categoria}
						descripcion={prod.descripcion}
						imagen={prod.imagen}
					/>
				))
			)}
		</div>
	);
};
