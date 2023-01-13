function savePointsNeatly(totalPoints){
    // captura el array actual de puntos
    let arrayTopPoints = getPointsLocal();
    // valida la existencia de puntos no existentes en el array
    if(!arrayTopPoints.includes(totalPoints) && totalPoints != 0){
        // se declara el slot maximo
        let maxSlotPoints = 5;
        // se agrega la nueva puntuacion obtenida
        arrayTopPoints.push(totalPoints);
        // se ordena el array de puntos de mayor a menor
        let updatedPointList = arrayTopPoints.sort(function(a, b){
            return b - a; 
        });
        // si la longitud es mayor a los slot permitidos
        if(maxSlotPoints < updatedPointList.length){
            // se elimina el ultimo elemento
            updatedPointList.pop();
        }
        // se guarda al localstorage
        setPointsLocal(arrayTopPoints);
    }
}

