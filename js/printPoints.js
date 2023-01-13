let elementListRecords = document.getElementById('table_records');
let listPointsRecords = getPointsLocal();
let lengthListPoints = listPointsRecords.length;


if(lengthListPoints != 0){
    let count = 1;    
    listPointsRecords.forEach(element => {
        let point = document.createElement("h4");
        point.classList.add('table__point');
        point.textContent = `${count++}.-  ${element}`;
        elementListRecords.appendChild(point);
    });

}else{elementListRecords.innerHTML='<h3 class="warning">No Points</h3>'}