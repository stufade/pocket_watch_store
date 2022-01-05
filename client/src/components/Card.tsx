import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Modal from "./ModalWrapper";
import ItemI from "../types/ItemI";
import ItemInfo from "./ItemInfo";
import ModalCard from "./ModalCard";
import useModal from "../hooks/useModal";

interface CardProps {
	item: ItemI;
}

const Card: React.FC<CardProps> = ({ item }) => {
	const { imgName } = item;
	const [showModal, toggleModal] = useModal(false);

	return (
		<>
			<div
				className="
					w-[250px] shadow-card rounded-[34px] py-6 px-8 min-h-[375px] text-center  cursor-pointer
					transition-all duration-500
					hover:shadow-main
				"
				onClick={toggleModal}
			>
				<div className="relative px-7">
					<Image
						src={`/${imgName}`}
						alt="img"
						layout="responsive"
						width={120}
						height={160}
						objectFit="contain"
						quality={100}
						priority={true}
						draggable={false}
					/>
				</div>
				<ItemInfo item={item} className="mt-5" />
			</div>
			<Modal show={showModal} onClose={toggleModal}>
				<ModalCard item={item} />
			</Modal>
		</>
	);
};

export default Card;
