import  { Component } from "react";
interface IState {
    points: number
}

interface IProps {
    isActive: boolean
}
class React3Class   extends Component<IProps, IState> {
    state = {
        points: 0
}
    render() {
        return <div>{this.props.isActive && 'active'}{this.state.points} </div>;
    }


}
export default React3Class