const List = ({ list }) => {
    return (
        <div className="card" style={{ width: "100%" }}>
            <div className="card-header">
                List of Dentists
            </div>
            <ul className="p-4">
                {list.map((dentist, i) => {
                    return (
                        <li key={"dentist" + i.toString()} className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{dentist.name + " " + dentist.last_name}</div>
                                <ul>
                                    <li>Enrollment: {dentist.enrollment}</li>

                                </ul>
                            </div>
                        </li>
                    )

                })}
            </ul>
        </div>

    )
}

export default List;
