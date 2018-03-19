// TODO make a class of helper functions ??
export class Helpers {
    
    // recursive function -> non-reference copy of complete object
    static clone(obj: any): any {
        let copy = obj;

        if (obj instanceof Array) {
            copy = [];
            for (let i = 0; i < obj.length; i++)
                copy[i] = Helpers.clone(obj[i]);
        } else if (obj instanceof Object) {
            copy = {};
            for (let attr in obj)
                if (obj.hasOwnProperty(attr)) copy[attr] = Helpers.clone(obj[attr]);
        }

        return copy
    }

    static isEmpty(obj: any): boolean {
        for (let key in obj)
            if (obj.hasOwnProperty(key))
                return false;
        return true;
    }

    static generateId(): string {
        return [
            Math.random().toString(36).substr(2),
            new Date().getMilliseconds(),
            new Date().getSeconds(),
            new Date().getMinutes(),
            new Date().getHours(),
            new Date().getDate(),
            new Date().getMonth()
        ].join("");
    }
}
    