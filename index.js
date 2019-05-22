const { Food } = require('./models');

const main = async () => {
    const foods = await Food.findAll({raw: true});
    console.log(foods);
}

main();
