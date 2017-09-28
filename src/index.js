module.exports = function zeros(expression) {
  const modules = [0, 0]; //first = module2, second = module5

  return Math.min(...expression.split('*').reduce((acc, item) => {
    let factorial = parseInt(item),
        step = item.includes('!!') ? 2 : 1;

    while (factorial > 0) {
      if (factorial % 2 === 0) {
        modules[0]++;
      }
      if (factorial % 5 === 0) {
        modules[1]++;
      }
      if (factorial % 25 === 0) {
        modules[1]++;
      }
      factorial -= step;
    }

    return modules;
  }, modules));
};