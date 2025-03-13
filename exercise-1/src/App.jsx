import Header from "./components/header";
import Scores from "./components/Scores";
import {JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS} from "./data"

function App() {
  return (
    <>
      {/* <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for (fake batch name))</h1>
      </header> */}

      <Header />

      {/* <main className="scores-container">
        <div class="scores">
          <h1>Fake Course</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First name 1 </td>
                <td>Last name 1 </td>
                <td>55</td>
              </tr>
              <tr>
                <td>First name 2 </td>
                <td>Last name 2 </td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main> */}
      <main className="scores-container">
        <Scores course="Java" courseResults={JAVA_RESULTS}/>
        <Scores course="Python" courseResults={PYTHON_RESULTS}/>
        <Scores course="Html" courseResults={HTML_RESULTS}/>
        <Scores course="English" courseResults={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
