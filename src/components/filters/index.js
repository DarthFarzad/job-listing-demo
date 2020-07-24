import React, { useContext } from "react";
import {Context} from "../../App";
import {CLEAR_FILTER} from "../../actions";
import "./filters.scss";
import FilterButton from "../filterButton";

export default function Filters() {
    const [{filters}, dispatch] = useContext(Context);
    const clearFilter = () => dispatch({type: CLEAR_FILTER});

    return filters.length > 0 && (<section className="filter">
        <div className="filter__items">
            {filters.map(filter => <FilterButton key={filter} filter={filter}/>)}
        </div>
        <a className="filter__clear-button" onClick={clearFilter}>clear</a>
    </section>);
}