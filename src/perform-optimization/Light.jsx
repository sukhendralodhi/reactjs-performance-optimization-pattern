
const Light = () => {
    console.log("Light component rendered");
    return (
        <div style={{ backgroundColor: 'yellow', padding: '20px', borderRadius: '5px' }}>
            <h1 className="text-2xl font-bold">Hello, React!</h1>
            <p>This is a simple light component.</p>
        </div>
    )
}

export default Light