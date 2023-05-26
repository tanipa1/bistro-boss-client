
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mb-10">
            <p className="text-[#D99904] mb-1">{subHeading}</p>
            <h3 className="text-3xl uppercase border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;