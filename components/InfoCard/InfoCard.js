const InfoCard = ({ title, description, skills }) => (
    <div className="infocard">
        <div className="infocard__description">
            <svg></svg>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div className="infocard__skills">
            <strong>Languages and technologies</strong>
            <p>{skills}</p>
        </div>
    </div>
);

export default InfoCard;