import * as React from "react"
import '../css/global.css'


const RatingScore = ({ score, total }: { score: number, total: number }) => {

    const percentage: number = Math.floor((score / total) * 100);
    const ratedScore: number = Math.round(percentage / 20);
    const ratedTotal: number = Math.floor(100 / 20); // ((total/total)*100)
    const remainingScore: number = ratedTotal - ratedScore;
    const ratingsElements = [];

    for (let i = 0; i < ratedScore; i++) {
        ratingsElements.push((<div className="lit-on-bubble mr-2"></div>))
    }

    for (let i = 0; i < remainingScore; i++) {
        ratingsElements.push((<div className="lit-off-bubble mr-2"></div>))
    }

    return (
        <div className="RatingBubbles flex mt-2">
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

const SkillCard = ({ title, skillScore, skillTotal = 5, logo = "https://api.iconify.design/nimbus:stats.svg?color=%23f4f4f9" }: SkillCardProps) => {
    return (
        <div className="bg-black border-2 border-grey rounded-24 p-4 pt-2 m-2 flex">
            <div className="mr-2">
                <img src={logo} alt="icon" className="icon-24 white-text" />
            </div>
            <div>
                <div><span className="white-text font-site-sans">{title}</span></div>
                <RatingScore score={skillScore} total={skillTotal} />
            </div>
        </div>
    );
}

export default SkillCard;

