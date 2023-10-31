// DogFact Component
export const DogFact = ({ dogFact }) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop. We'll call this 'cleanFact'.
  const cleanFact = dogFact.data[0].attributes.body;

  // Cleaning our data means choosing and keeping a somewhat small fraction of the data, the most useful data.

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return <div className="cleanfact">{cleanFact}</div>;
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
