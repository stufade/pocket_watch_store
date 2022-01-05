import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	type?: "primary" | "secondary";
}

const Button = ({ children, type = "primary" }: ButtonProps) => {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		console.log("Hi!");
	};
	return (
		<button
			className={`
				font-medium px-3 py-1 rounded-[10px] border-main border ${
					type === "primary" ? "bg-main text-white" : "text-main"
				}
				transform transition-transform duration-300
				hover:scale-95
            `}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
