const os = require('os');

const {arch, platform, totalmem, freemem} = os;

const stats = {
    OS: platform(),
    arch: arch(),
    totalram: totalmem(),
    freeram: freemem(),
}

console.log(stats);