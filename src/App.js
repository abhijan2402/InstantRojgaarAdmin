import "./App.css";

import Card from "./components/Card/Card";
import JobPostForm from "./components/Form/JobPostForm"
import JobDeatils from "./components/JobDetails/JobDeatils";

function App() {
  return (
    <div className="App">
      <Card />
      <JobPostForm/>
      <JobDeatils/>
    </div>
  );
}

export default App;
