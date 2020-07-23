import React from "react";
import Card from "../../components/card";

const sample = {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "tools": []
};

class Jobs extends React.PureComponent {
    render() {
        return (<div className="container">
            <Card {...sample} />
        </div>);
    }
}

export default Jobs;