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
        id: 13,
    },
    {
        id: 14,
    },
    {
        id: 15,
    },
    {
        id: 16,
    },
    {
        id: 17,
    },
    {
        id: 18,
    },
];
function Chair({ handleChair, bill }) {
    // function setChair() {
    //     tables.forEach((table) => {
    //         <div>this is chair no.{table.id}</div>;
    //         console.log("a");
    //     });
    // }
    function setChair(tableNum) {
        handleChair(tableNum);
    }
    return (
        <div className="chairChoosing">
            <div>
                <h1>Bạn đang ở bàn?</h1>
            </div>
            <div className="chairlist">
                {tables.map((table) => (
                    <div
                        className={`chair  ${
                            table.id === bill.Table ? "chair-checked" : ""
                        }`}
                        onClick={() => setChair(table.id)}
                    >
                        <h1>{table.id}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chair;
