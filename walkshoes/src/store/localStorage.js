export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
        return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

window.onbeforeunload = function (e) {
    window.localStorage.unloadTime = JSON.stringify(new Date());
};
    
window.onload = function () {
    let loadTime = new Date();
    let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime));
    let refresh = loadTime.getTime() - unloadTime.getTime();
    
    if(refresh>5000){
        window.localStorage.removeItem("state");
    }
};