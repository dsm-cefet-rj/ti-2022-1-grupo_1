export const saveState = (state) => {   //Guarda store no localStorage
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {}
};

export const loadState = () => {    //Recupera store do localStorage
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


//Limpa localStorage
window.onbeforeunload = function (e) {  //Salva o horario que a pagina foi fechada
    window.localStorage.unloadTime = JSON.stringify(new Date());
};
    
window.onload = function () {           //Compara os horarios do fechamento e reabertura e remove state
    let loadTime = new Date();
    let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime));
    let refresh = loadTime.getTime() - unloadTime.getTime();
    
    if(refresh>=1000){
        window.localStorage.removeItem("state");
    }
};