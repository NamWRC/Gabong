import "./chair.css";

const tables = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    },
    {
        id: 11,
    },
    {
        id: 12,
    },
    {
        id: 10,
    },
    {
        id: 11,
    },
    {
        id: 12,
    },
    {
        id: 10,
    },
    {
        id: 11,
    },
    {
        id: 12,
    },
];
function Chair() {
    // function setChair() {
    //     tables.forEach((table) => {
    //         <div>this is chair no.{table.id}</div>;
    //         console.log("a");
    //     });
    // }
    return (
        <div className="chairlist">
            {tables.map((table) => (
                <div className="chair">
                    <h1>{table.id}</h1>
                </div>
            ))}
        </div>
    );
}

export default Chair;
