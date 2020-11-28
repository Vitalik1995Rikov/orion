'use strict';

//Первый вариант второго задания
let obj = {
    name: 'Vitaly',
    sername: 'Rykov',
    city: 'NN'
};

let newObj = new Map(Object.entries(obj));

console.log(newObj);


//Второй вариант второго задания

let actionSample = {
    type: 'DISPATCH_STATUS',
    payload: { 
        id: 463901,
        status: 'pending',
        startTime: 1576115477,
        startAt: 1576115477,
        counters: {
            total: {
                sent: 2328,
                delivered: 2034,
                read: 0,
                undelivered: 0,
                timeout: 0,
                progress: 294,
                other: 0,
                total: 2328,
                amount: 4781.7,
            },
            sms: {
                sent: 2328,
                delivered: 2034,
                read: 0,
                undelivered: 0,
                timeout: 0,
                progress: 294,
                other: 0,
                total: 2328,
                amount: 4781.7,
            },
        },
    },
};

let json = JSON.stringify(actionSample);

let newObject = JSON.parse(json);

console.log(newObject);


//Первое задание

function sum(a, b) {
    return a + b;
}

function wrapper(f) { 
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

let newSum = wrapper(sum);
  
console.log(newSum(3)(4));