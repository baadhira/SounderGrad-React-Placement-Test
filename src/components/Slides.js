import React, { useState } from "react";
function Slides({ slides }) {
  const [tabs, setTabs] = useState(0);
  const handleSubmit = (id) => {
    if (id === 1) {
      setTabs(0);
    }
    if (id === 2) {
      setTabs(tabs - 1);
    }
    if (id === 3) {
      setTabs(tabs + 1);
    }
  };

  const buttonData = [
    {
      id: 1,
      title: "restart",
      data_testid: "button-restart",
    },
    {
      id: 2,
      title: "prev",
      data_testid: "button-prev",
    },
    {
      id: 3,
      title: "next",
      data_testid: "button-next",
    },
  ];

  const workoutPlan = [
    {
      id: 1,
      title: "Todays workout plan",
      text: "We are gonna do 3 fundamental exercises",
    },
    {
      id: 2,
      title: "First exercise",
      text: "Exercise no 1",
    },
    {
      id: 3,
      title: "Second exercise",
      text: "Exercise no 2",
    },
    {
      id: 4,
      title: "Third exercise",
      text: "Exercise no 3",
    },
  ];

  return (
    <div>
      <div id="navigation" className="text-center">
        {buttonData.map((data) => (
          <button
            disabled={
                data.id===1 && tabs<1  ?true:false ||
                data.id===2 && tabs<1  ?true:false ||
                data.id===3 && tabs>2  ?true:false
            }
            onClick={() => handleSubmit(data.id)}
            variant="outline-success"
          
          >
            {data.title}
          </button>
        ))}
      </div>
      {workoutPlan.map((data,index) => (
      tabs === index && (
        <div id="slide1" className="card text-center">
          <h1 data-testid="title">{data.title}</h1>
          <p data-testid="text">{data.text}</p>
        </div>
      )
      ))}
     
    </div>
  );
}

export default Slides;
