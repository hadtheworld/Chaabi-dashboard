
import './App.css';
// import Circle1 from './Components/Header/Circle1';
import Header from './Components/Header/Header';
import Sidebar1 from './Components/Sidebar1/Sidebar1';
import CardView from './Components/TopCard/CardView';
// import TrainingActivity from './Components/TrainingActivity/TrainingActivity';

function App() {
  const sidebar=['dashboard','trainings','users','analytics','my account','support'
]
const header={heading: "hello, Puneet Dhiman",
content: "following is your organization's performance summary"}
const card=[['avg. days taken','6','20%','3'],['% workers passing quiz','95%','20%','24%'],['video watch-time (hrs)','2,433','20%','435'],['in training workers','3,354','20%','234']]
  return (
    <div className="App dashboard">
      
      <Sidebar1 sidebarElements={sidebar}/>
      <div style={{display: 'flex', flexDirection: 'column'}} >
      <Header userData={header}/>
      <CardView viewData={card}/>
      
      </div>
      {/* <TrainingActivity/>  */}
    </div>
  );
}

export default App;
