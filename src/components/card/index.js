import React from "react";
import './card.scss';

const Card = (props) => {
        const {id, company,logo, featured, position, role, level, postedAt, contract, location, languages, tools} = props
        const isNew = props.new && <span className="chip chip--new">New!</span>;
        const isFeatured = featured && <span className="chip chip--featured">Featured</span>;
        return (
            <article className="card" data-featured={featured}>
                <h4 className="card__heading">{company} {isNew} {isFeatured}</h4>
                <img src={logo} alt={`logo for ${company}`} />
                <h6 className="position">{position}</h6>
                <ul className="card__information">
                    <li>{postedAt}</li>
                    <li>{contract}</li>
                    <li>{location}</li>
                </ul>
                <ul className="card__tags">
                        <li>{role}</li>
                        <li>{level}</li>
                        {languages && languages.map(language => <li>{language}</li>) }
                        {tools && tools.map(tool => <li>{tool}</li>)}
                </ul>
            </article>
)}

export default Card;