import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	show: boolean;
	onClose: () => void;
}

export const closeContext = React.createContext<() => void>(() => {});

const classes = ["blur-[5px]", "h-screen", "overflow-hidden"];

const ModalWrapper: React.FC<ModalProps> = ({ show, onClose, children }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (!show) return null;

	const contentElement = document.getElementById("__next")!;

	const addClasses = () => {
		classes.forEach((className) => contentElement.classList.add(className));
	};

	const removerClasses = () => {
		classes.forEach((className) =>
			contentElement.classList.remove(className)
		);
	};

	const handleCloseClick = () => {
		removerClasses();

		onClose();
	};

	if (isBrowser) {
		addClasses();

		return ReactDOM.createPortal(
			<>
				<div
					className="fixed top-0 left-0 bottom-0 right-0 bg-white opacity-30 blur-sm z-10"
					onClick={handleCloseClick}
				/>
				<closeContext.Provider value={handleCloseClick}>
					{children}
				</closeContext.Provider>
			</>,
			document.getElementById("modal-root")!
		);
	}

	return null;
};

export default ModalWrapper;
