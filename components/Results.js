import ThumbNail from "./ThumbNail"

function Results({results}) {
    return (
        <div>
            {results.map(result => (
                <ThumbNail key={result.id} result={result}></ThumbNail>
            ))}
        </div>
    )
}

export default Results
