
export function validate(data) {
    for (let item in data) {
        if (data[item] instanceof Array) {
            if (data[item].length === 0) {
                return item
            }
        } else if (data[item] instanceof Object) {
            if (validate(data[item])) {
                return item;
            }
        } else {
            if (data[item] === '') {
                return item
            }
        }
    }
}
