import { useState } from "react";


const useModal = (initialValue: boolean) => {
	const [showModal, setShowModal] = useState(initialValue);

	const handleToggleModal = () => {
		setShowModal((show) => !show);
	};

	return [showModal, handleToggleModal] as const;
};

export default useModal;
