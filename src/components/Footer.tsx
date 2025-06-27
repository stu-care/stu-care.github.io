import { useApp } from "../contexts/AppContext";
import Breadcrumbs from "./Breadcrumbs";

const Footer = () => {
	const {
		display: { showFooter },
	} = useApp();

	if (!showFooter) {
		return <></>;
	}

	return (
		<div className=" px-4 py-2 flex border-t overflow-hidden items-center justify-between border-base-content/20 bg-base-300/50">
			<Breadcrumbs />
			<footer className="p-2 mt-auto text-center text-xs">
				&copy; {new Date().getFullYear()}
			</footer>
		</div>
	);
};

export default Footer;
