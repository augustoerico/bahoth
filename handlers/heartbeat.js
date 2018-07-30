module.exports.handler = async (event) => {
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: 'Heartbeat',
            input: event
        })
    };
};