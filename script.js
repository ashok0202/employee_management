//refercence 

const url = "https://.......";

let fetchData = async (data) => {
    return new Promise((resolve, reject) => {
        fetch(data)
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Parse JSON if the response is OK
                } else {
                    reject(`HTTP Error: ${response.status}`);
                }
            })
            .then((jsonData) => resolve(jsonData)) // Resolve the promise with JSON data
            .catch((error) => reject(`Network Error: ${error.message}`)); // Reject with network error
    });
};

// Using the async function with promises
fetchData(url)
    .then((data) => {
        //redirect the pages....
        console.log("Success:", data); // handle resolved data.
    })
    .catch((error) => {
        console.error("Error:", error); // handle rejection
    });
