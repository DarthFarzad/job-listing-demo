import React, { useContext } from "react";
import { Context } from "../../App";
import Card from "../../components/card";

export default function Jobs() {
    const [{jobs}] = useContext(Context);
    return <div className="list">{jobs.map(job => <Card key={job.id} {...job}/>)}</div>;
}