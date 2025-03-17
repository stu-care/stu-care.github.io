import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { timeline } from "../../content/timeline";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const timelineTitle = (
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon
			fixedWidth={true}
			// biome-ignore lint/complexity/useLiteralKeys: consistency
			icon={byPrefixAndName.fas["timeline"]}
		/>
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
		<main className="grid grid-flow-row auto-rows-auto p-4 gap-4 ">
			<label
				htmlFor={"#session-select"}
				className="uppercase text-slate-500 text-sm"
			>
				Sessions
			</label>
			<select
				id="session-select"
				className="select w-full select-bordered dark:bg-slate-700 focus-within:select-primary"
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
						<h3 className="text-xl">{item.title}</h3>
						<ul className="timeline timeline-compact timeline-vertical">
							{item.events.map((event, j) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li className="indent-0" key={j}>
									<hr className="dark:bg-primary bg-primary/20" />
									<div className="timeline-middle flex items-center justify-center p-1 ">
										<FontAwesomeIcon
											className="text-2xl text-primary/50 dark:text-primary"
											icon={
												byPrefixAndName.fas[event.icon ?? "circle-arrow-right"]
											}
											fixedWidth={true}
										/>
									</div>
									<div className="timeline-end my-5">
										{event.title && (
											<div className="text-lg font-black">{event.title}</div>
										)}
										{event.description}
									</div>
									<hr className="dark:bg-primary bg-primary/20" />
								</li>
							))}
						</ul>
					</React.Fragment>
				))}
		</main>
	);
};

export default TimelinePage;
