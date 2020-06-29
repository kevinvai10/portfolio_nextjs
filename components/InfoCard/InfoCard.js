const InfoCard = ({ title, skills, Icon }) => (
    <div className="infocard">
        <div className="infocard__description">
            <Icon width="100px" height="100px"/>
            <h4>{title}</h4>
            {/*<p>{description}</p>*/}
        </div>
        <div className="infocard__skills">
            <strong>Languages and technologies</strong>
            <p>{skills}</p>
        </div>
    </div>
);

export default InfoCard;