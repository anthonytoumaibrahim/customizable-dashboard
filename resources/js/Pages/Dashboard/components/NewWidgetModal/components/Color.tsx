interface ColorProps {
    color1?: string;
    color2?: string;
    handleColorUpdate: () => void;
}

const Color = ({ color1, color2, handleColorUpdate }: ColorProps) => {
    return (
        <button
            className="w-10 h-10 rounded-md hover:opacity-70"
            onClick={() => handleColorUpdate()}
            style={{
                background: `linear-gradient(90deg, ${color1} 50%, ${color2} 50%)`,
            }}
        ></button>
    );
};

export default Color;
