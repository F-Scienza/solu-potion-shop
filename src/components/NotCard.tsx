const NotCard = () => {
	return (
		<div className=" relative mt-6 flex h-auto flex-col rounded-xl bg-black/40 p-8  shadow-lg max-w-md w-full">
            <span className="mb-4">
                🔎
            </span>
			<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
				No se encontraron posiones
			</h5>
			<p className="text-gray-600 mb-6 mt-2">
				No hay ninguna posion que puedas comprar en este momento
			</p>
		</div>
	);
};

export default NotCard;
