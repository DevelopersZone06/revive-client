import { Helmet } from "react-helmet-async";

const PageTitle = ({title}) => {
    return (
            <Helmet>
                <title>
                    Revive | {title}
                </title>
            </Helmet>
    );
};

export default PageTitle;