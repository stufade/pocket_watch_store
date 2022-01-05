import Image from "next/image";
import Link from "next/link";
import logoPic from "../../public/logo.svg";
import useModal from "../hooks/useModal";
import ModalMenu from "./ModalMenu";
import ModalWrapper from "./ModalWrapper";
import NavLink from "./NavLink";
import NavLinks from "./NavLinks";

const Header = () => {
	const [showModal, toggleModal] = useModal(false);

	return (
		<div className="flex justify-between items-center">
			<Link href="/">
				<a className="w-[200px] md:w-auto">
					<Image src={logoPic} quality={100} alt="logo" />
				</a>
			</Link>
			<div className="hidden md:flex text-sm font-light justify-between w-[234px]">
				<NavLinks />
			</div>
			<div className="md:hidden">
				<button onClick={toggleModal} className="w-[28px] sm:w-auto">
					<Image
						src="/menu.svg"
						width={36}
						height={36}
						alt="open menu"
					/>
				</button>
				<ModalWrapper show={showModal} onClose={toggleModal}>
					<ModalMenu />
				</ModalWrapper>
			</div>
		</div>
	);
};

export default Header;
