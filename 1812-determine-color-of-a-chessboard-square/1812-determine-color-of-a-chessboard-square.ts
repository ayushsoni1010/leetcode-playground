function squareIsWhite(coordinates: string): boolean {
    const letters:any = {
        "a": 1,
        "b": 2, 
        "c":1, 
        "d":2, 
        "e":1,
        "f":2,
        "g":1,
        "h":2
    }

    if((letters[coordinates[0]] % 2 !== 0) && (parseInt(coordinates[1]) % 2 === 0)){
        return true;
    }else if((letters[coordinates[0]] % 2 === 0) && parseInt(coordinates[1]) % 2 !== 0){
        return true;
    }else {
        return false;
    }
};