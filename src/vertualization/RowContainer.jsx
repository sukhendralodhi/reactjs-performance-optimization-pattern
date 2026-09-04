import { List } from "react-window";
import Row from "./Row";

const RowContainer = () => {
    return (
        <div style={{
            padding: "20px"
        }}>
            <h1>React Window Virtualization</h1>
            <List
                rowComponent={Row}
                rowCount={10000}
                rowHeight={50}
                rowProps={{}}
                style={{
                    height: "500px",
                    border: "1px solid black",
                }}
            />
        </div>
    )
}

export default RowContainer;