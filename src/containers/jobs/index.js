import React, { useContext } from "react";
import { Context } from "../../App";
import Card from "../../components/card";

export default function Jobs() {
    const [data] = useContext(Context);
    return (<div className="container">
        {data.jobs.map(job => <Card key={job.id} {...job}/>)}
    </div>);
}