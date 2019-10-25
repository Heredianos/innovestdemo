import React from 'react';
import NumericInput from 'react-numeric-input';
import '../style/Result.css'

var sum = 0;

class Result extends React.Component {
constructor (props){
super(props);

    this.state = {
        sum1: 0,
        sum2: 0,
        sum3: 0,
        res1: 0,
        res2: 0,
        res3: 0,
        resultado: 0,
    };
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
    this.handlenum3Change = this.handlenum3Change.bind(this);
    this.handleRes1Change = this.handleRes1Change.bind(this);
    this.handleRes2Change = this.handleRes2Change.bind(this);
    this.handleRes3Change = this.handleRes3Change.bind(this);
    this.showResult = this.showResult.bind(this);
}
    handlenum1Change (evt) {
        this.setState({ 
            sum1: Number(evt.target.value),
        });
    }
    handlenum2Change(evt) {
        this.setState({
             sum2: Number(evt.target.value) 
            });
    }
    
    handlenum3Change (evt) {
        this.setState({ 
            sum3: Number(evt.target.value), 
        });
    }
    handleRes1Change (evt) {
        this.setState({ 
            res1: Number(evt.target.value), 
        });
    }
    handleRes2Change(evt) {
        this.setState({ 
            res2: Number(evt.target.value) 
        });
    }
    
    handleRes3Change (evt) {
        this.setState({ 
            res3: Number(evt.target.value), 
        });
    }

    showResult (evt) {
        console.log("Resultado");
        this.setState({ 
        resultado: (this.state.res1+this.state.res2+this.state.res3)- (this.state.sum1+ this.state.sum2 + this.state.sum3) 
        });
    };

    
    render() {
        return(
            <React.Fragment>
                <div className="ResultConteiner">
                     <div className="Balance">
                         <h2> {this.state.resultado} </h2>
                     </div>
                     <div className="Price">
                        <div className="Cost">
                            <h2> Costos </h2>
                            <div className="DescriptionElements">
                                <h5> Descripción </h5>
                                <h5> Precio </h5>
                            </div>
                            <form  className="DescriptionElements" >
                                <input
                                type="text"
                                />
                                <input 
                                    type="number"
                                    onChange = {e=> {this.handlenum1Change(e); this.showResult()}}
                                    
                                />
                            </form>
                            <form className="DescriptionElements" >
                                <input
                                type="text"
                                />
                                <input 
                                type="number"
                                onChange = {e=> { this.handlenum2Change(e); this.showResult()}}
//                                value={this.state.sum2}
                                />
                            </form>
                            <form className="DescriptionElements" >
                                <input
                                type="text"
                                />
                                <input onChange={this.handlenum3Change}
                                onChange = { e=> { this.handlenum3Change(e); this.showResult()}}
                                type="number"
    //                            value={this.state.sum3}
                                />
                            </form>
                        </div>
                        <div className="Cost">
                            <h2> Ventas </h2>
                            <div className="DescriptionElements">
                                <h5> Descripción </h5>
                                <h5> Utilidad </h5>
                            </div>
                            <form className="DescriptionElements" >
                                <input
                                type="text"
                                />
                                <input 
                                onChange = {e=> {this.handleRes1Change(e); this.showResult()}}
                                type="number"
    //                            value={this.state.res1}
                                />
                            </form>
                            <form className="DescriptionElements" >
                                <input
                                type="text"
                                />
                                <input 
                                onChange = {e=> { this.handleRes2Change(e); this.showResult()}}
                                type="number"
    //                            value={this.state.res2}
                                />
                            </form>
                            <form className="DescriptionElements" >
                                <input 
                                type="text"
                                />
                                <input 
                                onChange= {e=> {this.handleRes3Change(e); this.showResult()}}
                                type="number"
    //                            value={this.state.res3}
                                />
                            </form>
                        </div>
                     </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Result;