let uniq = [];

let array1 = ['лев', 'обезьянка', 'слон', 'тигренок', 'волк', 'свинтус', 'петушара'];
let array2 = ['петух', 'ворона', 'лев', 'слон', 'волк', 'свинтус', 'каракатица'];

array1.forEach(element => {

    let boolean = array2.includes(element);
    if (!boolean) uniq.push(element);

});


console.log(uniq);