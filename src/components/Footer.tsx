import { useApp } from "../contexts/AppContext";

const Footer = () => {
	const {
		display: { showFooter },
	} = useApp();

	if (!showFooter) {
		return <></>;
	}

	return (
		<footer className="pt-2 mt-2 min-h-max border-t border-t-primary">
			&copy; {new Date().getFullYear()}
		</footer>
	);
};

export default Footer;
