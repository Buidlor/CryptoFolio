import React from "react";

const TrackBody = (assetsB) => {   

   console.log("if an address is entered. this will show up: ", assetsB)
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1>this is the tracking body</h1>
            </div>
            <div>
                <pre>
                    {JSON.stringify(
                        assetsB,
                        null,
                        2
                    )}
                </pre>
            </div>
        </div>
    )

}

export default TrackBody;
