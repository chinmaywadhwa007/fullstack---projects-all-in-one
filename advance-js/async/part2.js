function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched ")
        }, 2000)
    })
}
function commonDatabase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("common data fetched successfully from the database...! ")
        }, 4000)
    })
}

async function data() {
    try {
        console.log("fetching data loading...");
        // both this method gets messy with the larger code instead we do this 
        // const UserData = await fetchPostData()
        // const commonData = await commonDatabase()
        // this is the metthod where it won't get messy while  writing the big code for fetch 

        const [postData,commonData]=await Promise.all([fetchPostData(), commonDatabase()])
        console.log("fetched  completed ");

    } catch (error) {
        console.log("error fetching to  get the data from the database", error);

    }
}
data()