const obj = {
    name: 'ali',
    lastName: 'alavi',

    obj1: {
        age: 20,
        obj2: {
            jump() {
                console.log('jump');
            }
        }
    },

    move() {
        console.log('move');
    }
}

const objectCloner = function (obj) {
    const clonedObject = {};
    let objectKeyList = Object.keys(obj);

    objectKeyList.forEach(key => {
        if (typeof obj[key] === "object") {
            clonedObject[key] = objectCloner(obj[key]);
        } else {
            clonedObject[key] = obj[key];
        }
    })

    return clonedObject;
}

const clonedObject = objectCloner(obj);

console.log('original object: ', obj);
console.log('cloned object: ', clonedObject);
