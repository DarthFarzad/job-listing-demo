import React, { useContext } from "react";
import { Context } from "../../App";
import Card from "../../components/card";

export default function Jobs() {
    const [{jobs}] = useContext(Context);
    return <section className="list">{jobs.map(job => <Card key={job.id} {...job}/>)}</section>;
}