function checkIfItemExists(data, req, res) {
    // const params = new URLSearchParams(req.query)
    // console.log(params) 
    /* 
        I have to write a function here incase of several queries sent to the API. 
        For now we would workd with just the ID
    */

    const {id} = req.query;
    const item = data.find((item) => item.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    else {
        return item;
    }
}

module.exports = checkIfItemExists