import { useParams } from "react-router-dom";
import { React1 } from "./React1/React1";
import {React2} from "./React2/React2.jsx";
import {React3} from "./React3/React3.tsx";

export const DynamicComponentReact = () => {
    const { id } = useParams();
    switch (id) {
        case "1":
            return <React1 />;
        case "2":
            return <React2 />;
        case "3":
            return <React3 />;

        default:
            return null;
    }
};
