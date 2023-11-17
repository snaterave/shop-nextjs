import Header from '@components/Header';
import Nav from '@common/Nav';

// children = hijo que va a recibir
// crea una estructura que recibe lso elementos que se replicaran en el proyecto
export default function MainLayout({ children }) {
	return (
		// fragment
		<>
			<div className="min-h-full">
				<Header />
				<Nav />
				<main>
					<div className="max-w-7xl mx-auto py-6 sm:px-6">
						{children}
					</div>
				</main>
			</div>
		</>
	);
}
