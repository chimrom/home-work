import { Outlet } from 'react-router-dom';
import './Layout.sass'

export const Layout = () => {
	return (
		<div className='layout-wrapper'>
            <header>Дз Чимидов Роман</header>
			<main className='layout-wrapper__main'>
				<Outlet />
			</main>
            <footer>сделано им же</footer>
		</div>
	);
};