import * as React from "react"
import '../css/global.css'


const RatingScore = ({ score, total }: { score: number, total: number }) => {

    const percentage: number = Math.floor((score / total) * 100);
    const ratedScore: number = Math.round(percentage / 20);
    const ratedTotal: number = Math.floor(100 / 20); // ((total/total)*100)
    const remainingScore: number = ratedTotal - ratedScore;
    const ratingsElements = [];

    for (let i = 0; i < ratedScore; i++) {
        ratingsElements.push((<span className="lit-on-bubble"></span>))
    }

    for (let i = 0; i < remainingScore; i++) {
        ratingsElements.push((<span className="lit-off-bubble"></span>))
    }

    return (
        <div className="RatingBubbles">
            {ratingsElements}
        </div>
    );
};




interface SkillCardProps {
    logo?: string;
    title: string;
    skillTotal?: number;
    skillScore: number;
}

const SkillCard = ({ title, skillScore, skillTotal = 5, logo = "" }: SkillCardProps) => {
    return (
        <div className="bg-black border border-grey rounded-24">
            <div>
                <img src={logo} alt="icon" className="icon-24" />
                <span className="">{title}</span>
            </div>
            <div>
                <RatingScore score={skillScore} total={skillTotal} />
            </div>
        </div>
    );
}

export default SkillCard;

