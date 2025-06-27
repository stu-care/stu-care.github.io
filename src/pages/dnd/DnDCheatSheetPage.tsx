import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../components/Logo";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";

export const dndCheatSheetTitle = (
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon
			fixedWidth={true}
			icon={byPrefixAndName.fas["book-sparkles"]}
		/>
	</span>
);

const DnDCheatSheetPage = () => {
	return (
		<main className="flex flex-col gap-4 p-4">
			<section>
				<h1 className="mb-3">Abilities / Saves</h1>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-white/50 p-4 rounded-lg">
						<h2 className="mb-2">Strength</h2>
						<div className="flex flex-col gap-2">
							<p>
								<strong>ability: </strong>Lift, push, pull, or break something
							</p>
							<p>
								<strong>save: </strong>Physically resist direct force
							</p>
						</div>
					</div>
					<div className="bg-white/50 p-4 rounded-lg">
						<h2 className="mb-2">Dexterity</h2>
						<div className="flex flex-col gap-2">
							<p>
								<strong>ability: </strong>Move nimbly, quickly, or quietly{" "}
							</p>
							<p>
								<strong>save: </strong>Dodge out of harm's way
							</p>
						</div>
					</div>
					<div className="bg-white/50 p-4 rounded-lg">
						<h2 className="mb-2">Constitution</h2>
						<div className="flex flex-col gap-2">
							<p>
								<strong>ability: </strong>Push your body beyond normal limits{" "}
							</p>
							<p>
								<strong>save: </strong>Endure a toxic hazard
							</p>
						</div>
					</div>
					<div className="bg-white/50 p-4 rounded-lg">
						<h2 className="mb-2">Intelligence</h2>
						<div className="flex flex-col gap-2">
							<p>
								<strong>ability: </strong>Reason or remember
							</p>
							<p>
								<strong>save: </strong>Reconise an illusion as fake
							</p>
						</div>
					</div>
					<div className="bg-white/50 p-4 rounded-lg">
						<h2 className="mb-2">Wisdom</h2>
						<div className="flex flex-col gap-2">
							<p>
								<strong>ability: </strong>Notice things in the environment or in
								creatures’ behavior
							</p>
							<p>
								<strong>save: </strong>Resist a mental assault
							</p>
						</div>
					</div>
					<div className="bg-white/50 p-4 rounded-lg">
						<h2 className="mb-2">Charisma</h2>
						<div className="flex flex-col gap-2">
							<p>
								<strong>ability: </strong>Influence, entertain, or deceive
							</p>
							<p>
								<strong>save: </strong>Assert your identity
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h1 className="mb-3">Skills</h1>
			</section>
			<section>
				<h1 className="mb-3">Actions</h1>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Attack</h2>{" "}
					<p>Attack with a weapon or an Unarmed Strike.</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Dash</h2>
					<p>
						For the rest of the turn, give yourself extra movement equal to your
						Speed.
					</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Disengage</h2>
					<p>
						Your movement doesn’t provoke Opportunity Attack for the rest of the
						turn.
					</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Dodge</h2>
					<p>
						Until the start of your next turn, attack rolls against you have
						Disadvantage, and you make Dexterity saving throws with Advantage.
						You lose this benefit if you have the Incapacitated condition or if
						your Speed is 0.
					</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Help</h2>
					<p>
						Help another creature’s ability check or attack roll, or administer
						first aid.
					</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Hide</h2>{" "}
					<p>Make a Dexterity (Stealth) check.</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Influence</h2>
					<p>
						Make a Charisma (Deception, Intimidation, Performance, or
						Persuasion) or Wisdom (Animal Handling) check to alter a creature’s
						attitude.
					</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Magic</h2>
					<p>Cast a spell, use a magic item, or use a magical feature.</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Ready</h2>
					<p>Prepare to take an action in response to a trigger you define.</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Search</h2>
					<p>
						Make a Wisdom (Insight, Medicine, Perception, or Survival) check.
					</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Study</h2>
					<p>
						Make an Intelligence (Arcana, History, Investigation, Nature, or
						Religion) check.
					</p>
				</div>
				<div className="bg-ehite/50 p-4 rounded-lg">
					<h2 className="mb-2">Utilize</h2> <p>Use a nonmagical object.</p>
				</div>
			</section>
		</main>
	);
};

export default DnDCheatSheetPage;
