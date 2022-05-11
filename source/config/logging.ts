// This here gives us the current date in a human-readable format
const getTimeStamp = (): string => {
    return new Date().toISOString();
};

// Below, the object of: type: any, is in case we want to pass through an object and take a look at it in its JSON format. Notice the ?. Means we don't need to, but are able to pass. The part explaining this is at video 1, ~23:30
const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}, object`);
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}, object`);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}, object`);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}, object`);
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
