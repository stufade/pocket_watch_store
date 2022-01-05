import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SearchBarProps {
	className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
	const [searchStr, setSearchStr] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchStr(e.target.value);
	};

	return (
		<div className={`flex max-w-xl mx-auto ${className ?? ""}`}>
			<input
				className="
                    w-0 p-3 border-2 border-black text-xl sm:text-2xl rounded-[10px] flex-1 mr-2 sm:mr-5 font-medium
                    placeholder:font-light placeholder:text-['#C0C0C0']
                "
				placeholder="Type here"
				onChange={handleChange}
				value={searchStr}
			/>
			<Link
				href={searchStr == "" ? "/search" : `/search?str=${searchStr}`}
			>
				<a className="bg-main flex justify-center px-1 sm:px-6 rounded-[10px] flex-shrink-1">
					<Image
						src="/magnify.svg"
						alt="magnify"
						width={46}
						height={46}
					/>
				</a>
			</Link>
		</div>
	);
};

export default SearchBar;
