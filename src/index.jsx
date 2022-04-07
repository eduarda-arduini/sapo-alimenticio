import React from 'react';
import ReactDOM from 'react-dom';
import css from './style/style.css';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {alimentos: []};
      }
    

    clickMacro = (macro) => {
        const REQUEST_URL = "http://localhost:3000"
        const request = axios.get(`${REQUEST_URL}/getmacro/${macro}`).then(resp => {
            this.setState({alimentos: resp.data})
        })            
    }

    cleanTable = () => {
        this.setState({alimentos: []})            
    }

    render() {
        return (
            <div>
               <div className="header">
                   <span className="frog"/>
                   <span className="text-header home-header" onClick={() => this.cleanTable()}>Home</span>
                   <span className="header-macro"> 
                        <span className="text-header" onClick={() => this.clickMacro("proteinas")}>Proteínas</span>
                        <span className="text-header" onClick={() => this.clickMacro("carboidratos")}>Carboidratos</span>
                        <span className="text-header" onClick={() => this.clickMacro("gorduras")}>Gorduras</span>
                   </span>
               </div>
               <div className="page">
                   <div className="text">
                       <span className="text-body">
                            Bem-vindo ao Sapo Alimentício, aqui você irá encontrar informações nutricionais dos principais alimentos do mercado.
                       </span>
                   </div>
                   <div className="box-scroll">
                       <span className="scroll"/>
                       <span className="scroll-text">Scroll</span>
                   </div>

                   <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Proteínas</th>
                                <th>Carboidratos</th>                            
                                <th>Gorduras</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.alimentos.map(alimento => {
                                return <tr key={alimento}>
                                            <td>{alimento[0]}</td>
                                            <td>{alimento[1]}</td>
                                            <td>{alimento[2]}</td>
                                            <td>{alimento[3]}</td>                            
                                            <td>{alimento[4]}</td>
                                        </tr>
                            })}
                        </tbody>
                   </table>    
               </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
