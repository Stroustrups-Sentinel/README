import * as React from "react"
import '../css/global.css'
import CenteredTitle from "./centeredTitle";
import type { CenteredTitleProps } from "./centeredTitle";
import type { Crumb } from "./breadcrumb";
import Button from "./button";

interface CenteredProjectTitleProps extends CenteredTitleProps {
    nextPage?: Crumb;
    previousPage?: Crumb;
}
const CenteredProjectTitle = ({ title, nextPage, previousPage, }: CenteredProjectTitleProps) => {
    return (<div className="flex justify-between items-center mx-4">
        <Button text="🢀" background="black" link={previousPage?.url ?? ""}></Button>
        <CenteredTitle title={title.toUpperCase()}></CenteredTitle>
        <Button text="🢂" background="black" link={nextPage?.url ?? ""}></Button>
    </div>);
};

export default CenteredProjectTitle;