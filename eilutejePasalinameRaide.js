function createANewLine(line) {
    if (line.charAt(0) === 'P') {
        line = line.substring(1); // Pašaliname pirmąjį simbolį
    }
    
    if (line.charAt(line.length - 1) === 'P') {
        line = line.substring(0, line.length - 1); // Pašaliname paskutinį simbolį
    }
    
    return line;
}

// Pavyzdiniai naudojimo atvejai:
console.log(createANewLine("Pirmas")); // "irma"
console.log(createANewLine("AntrP")); // "Antr"
console.log(createANewLine("TrečiasP")); // "Trečias"
console.log(createANewLine("BePirmoIrPaskutinio")); // "BePirmoIrPaskutinio"
