class Asyn {
    constructor() {

    }

    callable(callback) {

        setTimeout(function () {
            callback()
            }, 3000);
    }
}

export default Asyn;