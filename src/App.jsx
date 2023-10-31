// Import required  hooks
import { useEffect, useState } from "react";
import { DogFact } from "./components/DogFact";

/*
1. Fetch the data from the Dog Facts free API JSON File and pass
down the data from the parent component to its child component.
*/

export const App = () => {
  const [dogFact, setDogFact] = useState("");
  const [changeFact, setChangeFact] = useState(false);

  // Hint: Initialize state for storing the dog fact
  // Hint: Define the API endpoint
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  const url = "https://dogapi.dog/api/v2/facts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDogFact(data);
        console.log(data);
      });
  }, [changeFact]);

  // const handleClick = () => {
  //   setChangeFact(!changeFact);
  // }

  return (
    <div className="App">
      {dogFact && <DogFact dogFact={dogFact} />}
      <button onClick={() => setChangeFact(!changeFact)}>
        Change dog fact
      </button>
    </div>
  );
};
