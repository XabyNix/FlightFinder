import { useState, useRef, useEffect } from "react";
import "./options.css";

type peopleType = {
	adult: number;
	children: number;
};

const Options = () => {
	const [people, setPeople] = useState<peopleType>({ adult: 1, children: 0 });
	const [isVisible, setIsVisible] = useState(false);
	const clickRef = useRef<HTMLInputElement | null>(null);

	const handlePeople = (name: keyof peopleType, operation: string) => {
		setPeople({ ...people, [name]: operation === "i" ? people[name] + 1 : people[name] - 1 });
	};

	useEffect(() => {
		const handleClickDocument = (e: MouseEvent) => {
			if (!clickRef.current?.contains(e.target as Node)) {
				setIsVisible(false);
			}
		};
		document.addEventListener("click", handleClickDocument);

		return () => {
			document.removeEventListener("click", handleClickDocument);
		};
	});
	return (
		<div className="inputContainer" ref={clickRef}>
			<span className="inputControl optionButton" onClick={() => setIsVisible(!isVisible)}>{`${people.adult} adulti - ${people.children} bambini`}</span>

			{isVisible && (
				<div className="options">
					<div className="option">
						<span>Adulti</span>
						<div className="increseDecreseSec">
							<button disabled={people.adult <= 1} onClick={() => handlePeople("adult", "d")}>
								-
							</button>
							<span>{people.adult}</span>
							<button onClick={() => handlePeople("adult", "i")}>+</button>
						</div>
					</div>
					<div className="option">
						<span>Bambini</span>
						<div className="increseDecreseSec">
							<button disabled={people.children < 1} onClick={() => handlePeople("children", "d")}>
								-
							</button>
							<span>{people.children}</span>
							<button onClick={() => handlePeople("children", "i")}>+</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Options;
