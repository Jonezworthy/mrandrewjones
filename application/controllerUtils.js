var controllerUtils = {
    padRight: function (string, length) {
        if (!length || length < string.length){
            return string;
        }
        while(string.length < length){
            string += ' ';
        }
        return string;
    }
};
module.exports = controllerUtils;