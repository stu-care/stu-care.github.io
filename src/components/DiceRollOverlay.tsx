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
		<div className="z-[1000] absolute flex items-center justify-center w-full h-full bottom-0 left-0 flex-col gap-2 dark:bg-base-content/50 bg-base-300/50 backdrop-blur-lg p-4">
			{value}
			{rollCrit && (
				<button
					type="button"
					className="btn dark:btn-primary btn-outline btn-block"
					onClick={rollCrit}
				>
					Crit
				</button>
			)}
			<button
				type="button"
				className="btn btn-primary btn-block"
				onClick={clear}
			>
				Close
			</button>
		</div>
	);
};

export default DiceRollOverlay;
