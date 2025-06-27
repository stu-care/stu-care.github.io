import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import Logo from "../../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import crewImgUrl from "../../assets/crew.jpg";

export const dndLandingTitle = (
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fab["d-and-d"]} />
	</span>
);

const DnDLandingPage = () => {
	return (
		<main className="flex flex-col items-center justify-center p-4">
			<img
				src={crewImgUrl}
				alt="Crew"
				className="overflow-hidden rounded-2xl shadow-2xl"
			/>
		</main>
	);
};

export default DnDLandingPage;
