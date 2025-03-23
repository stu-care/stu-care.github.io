import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Breadcrumbs from "../components/Breadcrumbs";

const Root = () => {
	return (
		<div className="p-4 flex min-h-dvh max-h-dvh flex-col overflow-hidden">
			<Header />
			<Menu />
			<div className="overflow-auto grow">
				<Outlet />
			</div>
			<Breadcrumbs />
			<Footer />
		</div>
	);
};

export default Root;
