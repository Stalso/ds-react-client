import createDeepstream from 'deepstream.io-client-js';
const ds = createDeepstream('127.0.0.1:6021/deepstream');
const client = ds.login({ username: "webagent", UUID: "webagent", type: 'webhook' }, (success, data) => {
    console.log("Login result: ", success);
    if (success) {
        console.log('Login data: ', data);
    }
});

client.event.subscribe('ping-rpc-message', data => {
    console.log('ping-rpc-message: ', data);

});

export {
    client,
    ds,
}