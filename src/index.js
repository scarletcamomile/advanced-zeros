module.exports = function getZerosCount(number, base) {
  let baseArr = [];
  for (let i = 2; i <= base; i++) {
    let count = 0
    if (base % i == 0) {
      while (base % i == 0) {
        count++;
        base /= i;
      }
      baseArr.push({
        'val': i,
        'count': count
      });
    }
  }

  return Math.min.apply(null, baseArr.map((val) => {
    return ({
      'val': findPower(val.val, number),
      'count': val.count
    });
  }).map((val) => {
    return Math.floor(val.val /= val.count)
  }))

  function findPower (val, count) {
    let ext = 0,
    power = 1;
    for (;;) {
      power *= val;
      let addend = Math.floor(count / power);
      if (addend < 1)
        return ext;
      ext += addend;
    }
  }
}