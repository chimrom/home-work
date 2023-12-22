import { useParams } from 'react-router-dom';
import {JsTask1} from "./JsTask1.jsx";
import {JsTask2} from "./JsTask2.jsx";
import {JsTask9} from "./JsTask9.jsx";

export const DynamicComponentJS = () => {
    const { id } = useParams();
    switch (id) {
        case '1':
            return <JsTask1 />;
        case '2':
            return <JsTask2 />;
        case '9':
            return <JsTask9 />;
        default:
            return null;
    }
};

