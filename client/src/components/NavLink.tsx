import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
	src: string;
	href: string;
	title: string;
	type: "header" | "menu";
	num?: number;
}

const NavLink = ({ src, href, title, type, num }: NavLinkProps) => {
	return (
		<Link href={href}>
			<a
				className={`flex ${
					type == "header" ? "flex-col" : "flex-row gap-4"
				}`}
			>
				<div className="grid place-items-center relative">
					<Image src={src} alt={title} width="30" height="30" />
					{num ? (
						<div className="bg-[#FF2B2B] text-xs font-bold px-[5px] py-[1px] text-white rounded-full absolute -bottom-1 -right-2">
							{num}
						</div>
					) : (
						""
					)}
				</div>
				<div className="mt-1">{title}</div>
			</a>
		</Link>
	);
};

export default NavLink;
