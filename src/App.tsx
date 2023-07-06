//import { useState } from "react";
import { CarritoComponent } from './components/CarritoComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { ListadoProductosComponent } from './components/ListadoProductosComponent';

function App() {

	return (
		<div
			className="min-h-full bg-fixed"
			style={{ backgroundImage: 'url(background.webp)' }}
		>
			<HeaderComponent />
			<div className="flex flex-col mt-6 items-center">
				<CarritoComponent/>
				<ListadoProductosComponent />
			</div>
		</div>
	);
}

export default App;
