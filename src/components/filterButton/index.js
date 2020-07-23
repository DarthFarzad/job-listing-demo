import React, {useContext} from "react";
import {Context} from "../../App";
import "./filter_button.scss";
import {TOGGLE_FILTER} from "../../actions";

export default function FilterButton({ filter }) {
    const [data, dispatch] = useContext(Context);
    const toggleFilter = payload => dispatch({type: TOGGLE_FILTER, payload})
    return  (<article className="filter-button">{filter}<span className="filter-button__icon" onClick={()=>toggleFilter(filter)}></span></article>)
}