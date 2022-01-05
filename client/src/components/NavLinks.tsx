import NavLink from "./NavLink"

interface NavLinksProps {
   type?: "menu" | "header"; 
}

const NavLinks:React.FC<NavLinksProps> = ({ type="header" }) => {
    return (
        <>
            <NavLink href="/profile" src="/profile.svg" title="Profile" type={type} />
            <NavLink href="/orders" src="/orders.svg" title="Orders" num={21} type={type}/>
            <NavLink href="/cart" src="/cart.svg" title="Cart" num={3} type={type}/>
        </>
    )
}

export default NavLinks
