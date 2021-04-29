function Sorteio(min, max, exclude) {
  var result = 0, i = 0;
  do {
    i++;
    var v1 = (max - min + 1);
    var v2 = Math.random();
    var v3 = v1 * v2;
    var v4 = parseFloat(v3) + parseFloat(min);
    var v5 = Math.floor(v4);
    result = v5;
    // console.log("min=" + min + " / max= " + max + " / v1= " + v1 + " / v2= " + v2 + " / v3=" + v3 + " / v4=" + v4 + " / v5=" + v5);
    //console.log(result + ' - ' + i);
    //console.log(exclude.includes(result));
  } while (exclude.includes(result) && i <= 100);

  return (result);
}

export default Sorteio;