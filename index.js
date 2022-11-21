// code your solution here
const record = [
    {year: "2020", result: "L"},
    {year: "2021", result: "W"},
    {year: "2022", result: "N/A"}
]

const superbowlWin = (record) => {
    
    const result = record.find((l) => {
        if(l.result === "W") {
            return true
        } else { return false }
    })

    if(result) { return result.year } else { return undefined }

}