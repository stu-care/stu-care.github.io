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
		<div className="">
			<div className="">{label}:</div>
			{updater && (
				<>
					<input
						className=""
						type="number"
						value={value}
						onChange={(e) => updater(Number.parseInt(e.target.value, 10))}
					/>
					<button
						className=""
						type="button"
						onClick={(e) => updater(value + 1)}
					>
						+
					</button>
					<button
						className=""
						type="button"
						onClick={(e) => updater(value - 1)}
					>
						-
					</button>
				</>
			)}
			{!updater && <input readOnly={true} value={value} />}
		</div>
	);
};

export default PropertyUpdaterRow;
