import React, { useContext } from "react";
import Image from "next/image";
import { closeContext } from "./ModalWrapper";
import NavLinks from "./NavLinks";

interface ModalMenuProps {}

const ModalMenu: React.FC<ModalMenuProps> = () => {
	const handleCloseClick = useContext(closeContext);

	return (
		<div className="right-0 top-0 bottom-0 max-w-full w-[450px] bg-white z-20 px-8 py-12 shadow-card fixed overflow-hidden">
			<div className="flex justify-between items-center">
				<div className="text-3xl font-light">Menu</div>
				<button
					className="grid place-items-center h-[28px] w-[28px] sm:h-[36px] sm:w-[36px] relative"
					onClick={handleCloseClick}
				>
					<Image src="/X.svg" alt="close" layout="fill" />
				</button>
			</div>
			<div className="flex flex-col mt-12 gap-12 text-xl items-center">
                <NavLinks type="menu" />
			</div>
		</div>
	);
};

export default ModalMenu;
