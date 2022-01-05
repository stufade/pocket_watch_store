import { NextPage } from "next";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const mockData = [
	{
		imgName: "pocket_watch_1.png",
		title: "Golden Antique",
		shortDescription: "Lörem ipsum kroras kavis al dore en vaval.",
		description:
			"Lörem ipsum tintingate eulingar kroruskapet. Abtologi geoblockering mägt. Puning kroning respektive dengen och primates.",
		price: 4999,
		id: 1,
	},
	{
		imgName: "pocket_watch_2.png",
		title: "Silver Antique",
		shortDescription: "Lörem ipsum kroras kavis al dore en vaval.",
		description:
			"Lörem ipsum tintingate eulingar kroruskapet. Abtologi geoblockering mägt. Puning kroning respektive dengen och primates.",
		price: 4999,
		id: 2,
	},
	{
		imgName: "pocket_watch_1.png",
		title: "Golden Antique",
		shortDescription: "Lörem ipsum kroras kavis al dore en vaval.",
		description:
			"Lörem ipsum tintingate eulingar kroruskapet. Abtologi geoblockering mägt. Puning kroning respektive dengen och primates.",
		price: 4999,
		id: 3,
	},
	{
		imgName: "pocket_watch_2.png",
		title: "Silver Antique",
		shortDescription: "Lörem ipsum kroras kavis al dore en vaval.",
		description:
			"Lörem ipsum tintingate eulingar kroruskapet. Abtologi geoblockering mägt. Puning kroning respektive dengen och primates.",
		price: 4999,
		id: 4,
	},
	{
		imgName: "pocket_watch_2.png",
		title: "Silver Antique",
		shortDescription: "Lörem ipsum kroras kavis al dore en vaval.",
		description:
			"Lörem ipsum tintingate eulingar kroruskapet. Abtologi geoblockering mägt. Puning kroning respektive dengen och primates.",
		price: 4999,
		id: 5,
	},
];

const search: NextPage = () => {
	return (
		<div>
			<SearchBar className="mt-16" />
			<div className="flex flex-wrap justify-center gap-16 my-16">
				{mockData.map((product) => (
					<Card item={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default search;
