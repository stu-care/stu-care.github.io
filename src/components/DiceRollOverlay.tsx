import type React from "react";

interface DiceRollOverlayProps {
	value: React.ReactNode | null;
	clear: () => void;
	rollCrit?: () => void;
}

const DiceRollOverlay: React.FC<DiceRollOverlayProps> = ({
	value,
	clear,
	rollCrit,
}) => {
	return (
		<div>
			{value}
			{rollCrit && (
				<button type="button" onClick={rollCrit}>
					Crit
				</button>
			)}
			<button type="button" onClick={clear}>
				Close
			</button>
		</div>
	);
};

export default DiceRollOverlay;
