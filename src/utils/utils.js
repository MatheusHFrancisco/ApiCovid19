function helper(text) {
    let newText = text.toLowerCase() 
        const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç';
        newText = newText.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
        newText = newText.replace(/ /g, '-')
        return newText;
}

module.exports = { helper }