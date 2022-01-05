import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import watchWithChainPic from "../../public/watch_with_chain.svg";
import watchPic from "../../public/watch.svg";
import arrowPic from "../../public/arrow.svg";
import { useEffect } from "react";
import anime from "animejs";

const Home: NextPage = () => {
	useEffect(() => {
		const date = new Date(Date.now());
		const minutesDeg = date.getMinutes() * 6;
		const hoursDeg = date.getHours() % 12 * 30 + date.getMinutes() / 60 * 30;

		anime({
			targets: ".clock-minute",
			rotate: [-90, minutesDeg - 90],
			duration: 2500,
			easing: "easeInOutQuad",
		});

		anime({
			targets: ".clock-hour",
			rotate: [-90, hoursDeg - 90],
			duration: 2500,
			easing: "easeInOutQuad",
		});
	}, []);

	return (
		<div>
			<div className="sm:mt-20 flex">
				<div className="flex-1 lg:mr-9 mt-6">
					<div className="text-5xl sm:text-6xl font-normal text-center leading-[6rem] sm:leading-[6rem] mb-6 sm:mb-20">
						Choose <span className="text-main">Your</span> Perfect
						Watch Now
					</div>
					<SearchBar />
				</div>
				<div className="flex-1 hidden 2xl:block">
					<div className="relative">
						<Image src={watchWithChainPic} alt="watch pic" priority={true} />
						<div className="w-[140px] h-[6px] rounded-full clock-hand clock-minute absolute bottom-[240px] left-[264px]" />
						<div className="w-[100px] h-[6px] rounded-full clock-hand clock-hour absolute bottom-[240px] left-[284px]" />
						<div className="absolute left-[329px] bottom-[239px] w-[10px] h-[10px] rounded-full bg-black" />
					</div>
				</div>
				<div className="flex-[0.7] hidden lg:grid place-items-center 2xl:hidden">
					<div className="relative">
						<Image src={watchPic} alt="watch pic" priority={true} />
						<div className="w-[140px] h-[6px] rounded-full clock-hand clock-minute absolute bottom-[113px] left-[37px]" />
						<div className="w-[100px] h-[6px] rounded-full clock-hand clock-hour absolute bottom-[113px] left-[57px]" />
						<div className="absolute left-[102px] bottom-[111px] w-[10px] h-[10px] rounded-full bg-black" />
					</div>
				</div>
			</div>
			<div className="mt-6 sm:mt-20 flex flex-col items-center">
				<div className=" text-center font-light text-3xl sm:text-4xl leading-[4rem] sm:leading-[4rem] tracking-[0.3rem] sm:tracking-[0.5rem]">
					Or Watch The Whole Collection Here:
				</div>
				<Link href="/search">
					<a className="bg-main rounded-full py-[17px] px-[26px] sm:px-[33px] sm:py-[23px] flex items-center mt-1 sm:mt-8">
						<Image
							src={arrowPic}
							alt="arrow"
							width={18}
							height={38}
						/>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Home;
