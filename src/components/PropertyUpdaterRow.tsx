import type React from "react";

interface IPropertyUpdaterRowProps {
	label: string;
	value: number;
	updater?: (value: number) => void;
}

const PropertyUpdaterRow: React.FC<IPropertyUpdaterRowProps> = ({
	label,
	value,
	updater,
}) => {
	return (
		<div className="grid grid-cols-10 items-center auto-cols-fr gap-2">
			<div className="col-span-4 z-2 text-end text-sm font-semibold leading-[1em]">
				{label}:
			</div>
			{updater && (
				<>
					<input
						className="input col-span-4 input-sm"
						type="number"
						value={value}
						onChange={(e) => updater(Number.parseInt(e.target.value, 10))}
					/>
					<button
						className="btn btn-sm"
						type="button"
						onClick={(e) => updater(value + 1)}
					>
						+
					</button>
					<button
						className="btn btn-sm"
						type="button"
						onClick={(e) => updater(value - 1)}
					>
						-
					</button>
				</>
			)}
			{!updater && (
				<input
					readOnly={true}
					className="input col-span-6 input-sm bg-slate-100 text-slate-800/50"
					type="number"
					value={value}
				/>
			)}
		</div>
	);
};

export default PropertyUpdaterRow;
