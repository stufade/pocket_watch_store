import React from "react";
import ItemI from "../types/ItemI";
import Button from "./Button";

interface ItemInfoProps {
	item: ItemI;
	className?: string;
	type?: "small" | "big" | "medium";
}

const ItemInfo = ({ item, className, type="small" }: ItemInfoProps) => {
	const { title, description, price, shortDescription } = item;

	const styles = {
		fontTitle: { 
			small: "text-xl",
			medium: "text-2xl",
			big: "text-4xl"
		},
		descMt: {
			small: "mt-2",
			medium: "mt-6",
			big: "mt-8"
		},
		descFont: {
			small: "text-base",
			medium: "text-lg",
			big: "text-2xl"
		},
		bottomMt: {
			small: "mt-6",
			medium: "mt-8",
			big: "mt-14"
		},
		bottomFont: {
			small: "text-base",
			medium: "text-xl",
			big: "text-3xl"
		}
	}


	return (
		<div className={`text-center ${className}`}>
			<div className={`font-medium ${styles.fontTitle[type]}` }>{title}</div>
			<div className={`font-light text-[#929292] ${styles.descMt[type]} ${styles.descFont[type]}`}>
				{type === "small" ? shortDescription : description}
			</div>
			<div className={`flex justify-between items-center ${styles.bottomMt[type]} ${styles.bottomFont[type]}`}>
				<div className="font-medium tracking-wider">
					{price}$
				</div>
				<Button type="primary">Add</Button>
			</div>
		</div>
	);
};

export default ItemInfo;
