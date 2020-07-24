import React, { useContext } from "react";
import { Context } from "../../App";
import Card from "../../components/card";

export default function Jobs() {
    const [{jobs, filters}] = useContext(Context);
    const filtered = filters.length > 0;
    return <div className="list" data-filtered={filtered}>{jobs.map(job => <Card key={job.id} {...job}/>)}</div>;
}