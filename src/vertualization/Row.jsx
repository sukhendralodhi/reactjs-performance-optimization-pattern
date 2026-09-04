
const Row = ({
    index,
    style
}) => {
    return (
        <div style={{
            ...style,
            padding: "20px",
            borderBottom: "1px solic #ccc"
        }}>
            Item {index + 1}
        </div>
    )
}

export default Row