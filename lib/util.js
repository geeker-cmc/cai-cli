
const util = {
    isType(target, type = 'String'){
        return Object.prototype.toString.call(target) === `[object ${type}]`
    }
}

module.exports = util;