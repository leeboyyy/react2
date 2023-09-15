


const Person = ({name, place, mobile }) => {
    // const pname = <h2>Name: {name}</h2>;
    const person = (
      <div>
        <h2>Name: {name}</h2>
        <h2>Mobile: {mobile}</h2>
      </div>
    );
    const shoot = () => {
        alert("Alert Message");
    }
    return (
        <>
        {/* <h1>Hello page: { JSON.stringify(props) }</h1> */}
        {/* {name} */}
        {person}
        <h2>Place: {place}</h2>
        <button onClick={shoot}>Take the shot!</button>
        </>
    );
}

export default Person;