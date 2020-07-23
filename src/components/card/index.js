import React, { useContext } from "react";
import { Context } from "../../App";
import { TOGGLE_FILTER } from '../../actions';
import './card.scss';

const Card = (props) => {
    const [data, dispatch] = useContext(Context);
    const handleFilter = (payload) => {
        dispatch({ type: TOGGLE_FILTER, payload });
    };

    const { company,logo, featured, position, role, level, postedAt, contract, location, languages, tools} = props
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
                    <li onClick={()=> handleFilter(role)}>{role}</li>
                    <li onClick={()=> handleFilter(level)}>{level}</li>
                    {languages && languages.map(language => <li key={language} onClick={()=> handleFilter(language)}>{language}</li>) }
                    {tools && tools.map(tool => <li key={tool} onClick={()=> handleFilter(tool)}>{tool}</li>)}
            </ul>
        </article>);
}

export default Card;