import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { timeline } from "../../content/timeline";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const timelineTitle = (
	<span className="flex items-center gap-1 w-max">
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas.timeline} />
		Timeline
	</span>
);

const TimelinePage = () => {
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	const [selectedSession, setSelectedSession] = useState<string>("all");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: timelineTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/timeline", label: timelineTitle });
	}, []);

	useEffect(() => {
		console.log(selectedSession);
	}, [selectedSession]);
	return (
		<main>
			<label htmlFor={"#session-select"}>Sessions</label>
			<select
				id="session-select"
				onChange={(e) => {
					const selectedTitle = e.target.value;
					console.log(selectedTitle);
					setSelectedSession(selectedTitle);
				}}
			>
				<option value="all">All</option>
				{timeline.toReversed().map((item, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<option key={i} value={item.title?.toString() ?? ""}>
						{item.title}
					</option>
				))}
			</select>
			{timeline
				.toReversed()
				.filter((item) => {
					console.log(
						selectedSession === "all" || item.title === selectedSession,
					);
					return selectedSession === "all" || item.title === selectedSession;
				})
				.map((item, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<React.Fragment key={i}>
						<h3>{item.title}</h3>
						<ul>
							{item.events.map((event, j) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={j}>
									<hr />
									<div>
										<FontAwesomeIcon
											icon={
												byPrefixAndName.fas[event.icon ?? "circle-arrow-right"]
											}
											fixedWidth={true}
										/>
									</div>
									<div>
										{event.title && <div>{event.title}</div>}
										{event.description}
									</div>
									<hr />
								</li>
							))}
						</ul>
					</React.Fragment>
				))}
		</main>
	);
};

export default TimelinePage;
