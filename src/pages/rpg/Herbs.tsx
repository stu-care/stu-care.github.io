import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ChangeEventHandler, useEffect, useState } from "react";
import { herbList } from "../../content/herbList";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const herbsTitle = (
	<span className="flex items-center gap-1 w-max">
		{/* biome-ignore lint/complexity/useLiteralKeys: <explanation> */}
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas["seedling"]} />
		Herbs
	</span>
);

const HerbsPage = () => {
	const [filterValue, setFilterValue] = useState("");
	const [type, setType] = useState("");

	const handleFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilterValue(e.target.value);
	};

	const handleTypeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		setType(e.target.value);
	};

	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: herbsTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/herbs", label: herbsTitle });
	}, []);

	return (
		<main>
			<div>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Filter</label>
				<input
					value={filterValue}
					onChange={handleFilterChange}
					placeholder="Filter (e.g. 'eC6' or 'Ingest')"
					// biome-ignore lint/a11y/noAutofocus: <explanation>
					autoFocus={true}
				/>
			</div>
			<div>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Type</label>
				<select onChange={handleTypeChange}>
					<option value="">All</option>
					<option value="herb">Herb</option>
					<option value="poison">Poision</option>
				</select>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 auto-rows-auto grid-flow-row-dense gap-2">
				{herbList
					.filter((herb) => (type ? herb.type === type : true))
					.filter((herb) => {
						if (!filterValue) return true;
						return (
							herb.herb.toLowerCase().includes(filterValue.toLowerCase()) ||
							herb.finding.toLowerCase().includes(filterValue.toLowerCase()) ||
							herb.formPrep.toLowerCase().includes(filterValue.toLowerCase()) ||
							herb.effect.toLowerCase().includes(filterValue.toLowerCase()) ||
							herb.environment
								.toLowerCase()
								.includes(filterValue.toLowerCase()) ||
							herb.temperate.toLowerCase().includes(filterValue.toLowerCase())
						);
					})
					.map((herb, index) => {
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div className="border-1 border-primary " key={index}>
								<div className="flex flex-col h-full">
									<div className="p-2 bg-primary text-base-100 font-bold">
										<h3 className="flex justify-between items-baseline">
											<span>
												{herb.type === "herb" ? (
													<FontAwesomeIcon
														icon={byPrefixAndName.fas.seedling}
														fixedWidth={true}
													/>
												) : (
													<FontAwesomeIcon
														icon={byPrefixAndName.fas["flask-round-poison"]}
														fixedWidth={true}
													/>
												)}
												{herb.herb}
											</span>
											<span className="text-sm">{herb.finding}</span>
										</h3>
									</div>
									<div className="p-2 grow">
										<div>
											<div>
												<div>{herb.temperate}</div>
												<div>{herb.environment}</div>
											</div>
											<div className="">{herb.formPrep}</div>
										</div>
										<div>{herb.effect}</div>
										<div className="flex *:grow">
											<div>
												<div>AF</div>
												<div>{herb.af ?? "-"}</div>
											</div>
											<div>
												<div>Lvl</div>
												<div>{herb.lvl ?? "-"}</div>
											</div>
											<div>
												<div>Cost</div>
												<div>
													{herb.cost} ({`${herb.cost}`.to("bp")})
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</main>
	);
};

export default HerbsPage;
