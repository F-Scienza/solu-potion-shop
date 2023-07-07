import { useCarrito } from "../Context/AppContext";
import { Product } from "../Types";

const Card = (data: Product) => {
  const context = useCarrito();
  const { carrito, setCarrito, billetera } = context;

  const { nombre, precio, categoria, descripcion, imagen, id } = data;

  const handleAddToCart = () => {
    setCarrito([...carrito, data]);
  };
  let conditionalClass: string = "";

  const isInCart: boolean =
    carrito.filter((product) => product.id === id).length > 0;

  if (billetera === 0 || billetera < precio || isInCart) {
    conditionalClass = "hidden";
  }

  return (
    <div className="relative mt-6 flex w-full h-auto flex-col rounded-xl bg-black/40 bg-clip-border text-white shadow-md transition duration-300 hover:scale-105 hover:bg-black/60">
      <div className="p-6">
        <img src={imagen} className="mb-4 h-12 w-12 " alt="imagen" />
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {nombre}
        </h5>
        <span className="text-xs text-white/70 object-center py-0 font-bold">
          {categoria}
        </span>

        <p className="block font-sans font-light leading-relaxed text-inherit antialiased text-xs">
          {descripcion}
        </p>
      </div>
      <div className="p-6 pt-0 relative transition-all duration-500">
        <button
          className={`${conditionalClass} flex select-none items-center gap-2 rounded-lg text-center align-middle font-sans text-xs font-bold uppercase text-pink-500  hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="button"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
      <div className="flex absolute right-4 top-4 items-center">
        <img src="./gem.png" alt="gema" className="w-4 h-4 px-0" />
        <span> x{precio}</span>
      </div>
    </div>
  );
};

export default Card;
