import { useState, useRef, useEffect } from "react";
import "./options.css";

interface adultType {
	adult: number;
	setAdult: React.Dispatch<React.SetStateAction<number>>;
	children: number;
	setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const Options = ({ adult, setAdult, children, setChildren }: adultType) => {
	const [isVisible, setIsVisible] = useState(false);

	const clickRef = useRef<HTMLInputElement | null>(null);

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
			<span className="inputControl optionButton" onClick={() => setIsVisible(!isVisible)}>{`${adult} adulti - ${children} bambini`}</span>

			{isVisible && (
				<div className="options">
					<div className="option">
						<span>Adulti</span>
						<div className="increseDecreseSec">
							<button disabled={adult <= 1} onClick={() => setAdult(adult - 1)}>
								-
							</button>
							<span>{adult}</span>
							<button onClick={() => setAdult(adult + 1)}>+</button>
						</div>
					</div>
					<div className="option">
						<span>Bambini</span>
						<div className="increseDecreseSec">
							<button disabled={children < 1} onClick={() => setChildren(children - 1)}>
								-
							</button>
							<span>{children}</span>
							<button onClick={() => setChildren(children + 1)}>+</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Options;
