import { useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

function App() {
  const [isTaskListVisible, setIsTaskListVisible] = useState(false);
  const [data, setData] = useState([{
    title: "have lunch",
    description: "lunch",
    time: "now"
  }, 
  {
    title: "Run Learning Squads",
    description: "amazing stuff",
    time: "2pm ET"
  }, 
  {
    title: "Complete exit tickets",
    description: "surveys and stuff",
    time: "5pm ET"
  }]);

  const handleClick = () => setIsTaskListVisible(!isTaskListVisible)
  // condition that returns a boolean ? what to run if condition is true : what to run if condition is false
  return (
    <>
      <div>
        <Form data={data} setData={setData}/>
      </div>
      <div>
        <button onClick={handleClick}>{isTaskListVisible ? 'Hide Tasks' : 'Show Tasks'}</button>
        {isTaskListVisible && (<ol>
          {/* <ListItem taskName="have lunch" description="lunch" time="1pm" />
          <ListItem taskName="start work" description="make react demo" time="9am" /> */}
          {
            data.map( (task, index) => (
              // which component do I want to display?
              <ListItem 
                key={index}
                taskName={task.title}
                description={task.description}
                time={task.time}
              />
            ) )
          }
        </ol>)}
      </div>
    </>
  )
}

export default App
