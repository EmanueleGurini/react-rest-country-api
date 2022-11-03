// this object overwrite the Select object style
export const styles = (theme) => {
	return {
		container: (base) => ({
			...base,
			width: 200,
			color: theme ? "black" : "#fff",
		}),
		placeholder: (provided) => {
			const color = theme ? "black" : "#fff";
			return { ...provided, color };
		},
		singleValue: (provided) => {
			const color = theme ? "black" : "#fff";
			return { ...provided, color };
		},

		dropdownIndicator: (provided) => {
			const color = theme ? "black" : "#fff";
			return { ...provided, color };
		},

		option: (provided) => {
			const background = theme ? "#fff" : "#2b3945";
			const color = theme ? "black" : "#fff";

			return { ...provided, background, color };
		},
		menu: (provided) => {
			const background = theme ? "#fff" : "#2b3945";
			const color = theme ? "black" : "#fff";

			return {
				...provided,
				background,
				color,
				border: "none",
				boxShadow: "0px 2px 9px rgb(0 0 0 / 5%)",
			};
		},
		valueContainer: (provided) => {
			const background = theme ? "#fff" : "#2b3945";
			const color = theme ? "black" : "#fff";

			return { ...provided, background, color };
		},
		control: (provided) => {
			const background = theme ? "theme" : "#2b3945";
			const color = theme ? "black" : "#fff";

			return {
				...provided,
				background,
				color,
				border: "none",
				boxShadow: "0px 2px 9px rgb(0 0 0 / 5%)",
			};
		},
	};
};