import {FC, ReactNode} from "react";

interface IProps {
    children: ReactNode
}
export const Wrapper:FC<IProps> = ({children}) => {
    return <div>
        {children}
    </div>
}