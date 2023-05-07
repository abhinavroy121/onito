export async function postApi(payload) {
    try {
        let response = await fetch("https://pear-fierce-lovebird.cyclic.app/api/adduserdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload,
        });

        let data = await response;

        return data;
    } catch (err) {
        console.log("error while posting data", err);
    }
}

export async function getApi() {
    try {
        let response = await fetch("https://pear-fierce-lovebird.cyclic.app/api/userdata");

        let data = response.json();
           console.log(data)
        return data;
    } catch (err) {
        console.log(err, "error while fetching user");
    }
}
