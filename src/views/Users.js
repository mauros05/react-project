const Users = (props) => {
    return (
        <>
        <h1>Name: {props.name}</h1>
        <h2>Last Name: {props.lastName}</h2>
        <h2>Age: {props.age}</h2>
        </>
    );
}

export default Users;