import {version} from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <table className="main-table">
                    <tbody>
                    <tr>
                        <th>品番・品名</th>
                        <th>数量</th>
                        <th>単位</th>
                        <th>単価</th>
                        <th>金額</th>
                    </tr>
                    <tr>
                        <th><input /></th>
                        <th><input /></th>
                        <th><input placeholder="単位" /></th>
                        <th>
                            <input />
                            <input type="checkbox" />
                        </th>
                        <th><input readOnly disabled /></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
