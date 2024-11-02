
const Heading = ({title,subtitle}) => {
    return (
        <div className="my-10">
            <h2 className="text-center text-5xl mb-3 font-thin">{title}</h2>
            <p className="text-center text-xl font-semibold text-gray-500">{subtitle}</p>
        </div>
    );
};

export default Heading;