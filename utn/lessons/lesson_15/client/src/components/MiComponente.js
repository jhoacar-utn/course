import { Component } from "react";

class MiComponente extends Component{

    constructor(props){

        super(props);
        
        this.state = {
            name: this.props.name
        }
    }

    static getDerivedStateFromProps()
    {

    }

    componentWillMount ()
    {

    }

    render(){

        return (
            <div>
                Estado - {this.state.name}
                <br></br>
                Atributo - {this.name}
            </div>
        )
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    changeName()
    {
        this.name = "Pepito";
        this.state.name = "Otro nombre";
        this.setState({ name: "Otro nombre" });
    }
}

export default MiComponente;