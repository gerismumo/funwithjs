const FilterMessages = (messages) => {
    const userQueues = new Map();
    const filteredMessages = [];

    messages.forEach(([userId, timeStamp, content]) => {
        const userQueue = userQueues.get(userId);
        console.log("userQueue", userQueue)
        if (userQueue) {
            const [lastTimeStamp, lastContent] = userQueue;

            if (lastContent === content && timeStamp - lastTimeStamp <= 60 * 1000) {
                return; 
            }
        }

        filteredMessages.push([userId, timeStamp, content]);
        
        userQueues.set(userId, [timeStamp, content]);
    });

    return filteredMessages; 
};

const testData = FilterMessages([
    [1, 1000, "Hello"],
    [1, 1030, "Hello"],
    [2, 1050, "Hi"]
]);

console.log(testData); 
