import React, { useContext } from "react";
import ItemI from "../types/ItemI";
import ItemInfo from "./ItemInfo";
import Image from "next/image";
import { closeContext } from "./ModalWrapper";

interface ModalCardProps {
	item: ItemI;
}

const ModalCard: React.FC<ModalCardProps> = ({ item }) => {
	const { imgName } = item;
	const handleCloseClick = useContext(closeContext);

	return (
		<div className="grid place-content-center absolute top-0 bottom-0 right-0 left-0">
			<div
				className="
                    	bg-white shadow-card rounded-[50px] py-10 px-5 lg:p-[72px] z-20 min-h-1/2 w-[90%] lg:w-[850px] xl:w-[1040px] grid mx-auto relative
                	"
			>
				<div className="relative h-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
					<div className="relative">
						<Image
							src={`/${imgName}`}
							alt="img"
							layout="fill"
							objectFit="contain"
							quality={100}
							priority={true}
							draggable={false}
						/>
					</div>
					<ItemInfo
						type="big"
						className="hidden lg:block lg:pl-[72px] xl:px-16"
						item={item}
					/>
					<ItemInfo type="medium" item={item} className="px-4 mt-4 lg:hidden" />
				</div>
				<button
					className="absolute top-8 right-8"
					onClick={handleCloseClick}
				>
					<Image src="/X.svg" alt="close" width={30} height={30} />
				</button>
			</div>
		</div>
	);
};

export default ModalCard;
