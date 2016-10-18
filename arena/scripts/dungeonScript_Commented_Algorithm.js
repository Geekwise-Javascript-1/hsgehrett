var grid = function(x, y){
    var totalCells = x * y;
    var cells = [];
    var unvisited = [];

    for(var i = 0; i < y; i++){
        cells[i] = [];
        unvisited[i] = [];
        for(var j = 0; j < x; j++){
            cells[i][j] = [0, 0, 0, 0];
            unvisited[i][j] = true;
        }
    }

    var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x) ];
    console.log('The starting cell: '+currentCell+'\n\r-----------------\n\r');

    var path = [currentCell];

    unvisited[currentCell[0]][currentCell[1]] = false;

    var visited = 1;

    while(visited < totalCells){
        var possible = [
            [ currentCell[0]-1, currentCell[1], 0, 2 ],
            [ currentCell[0], currentCell[1]+1, 1, 3 ],
            [ currentCell[0]+1, currentCell[1], 2, 0 ],
            [ currentCell[0], currentCell[1]-1, 3, 1 ]
        ];
        var neighbors = [];
        console.log('// Check all four directions.');
        console.log(possible);
        console.log('\n\r// Of the four sides, does a cell exist in each direction?');
        for(var l = 0; l < 4; l++){
            if(possible[l][0] > -1 &&
                possible[l][0] < y &&
                possible[l][1] > -1 &&
                possible[l][1] < x &&
                unvisited[ possible[l][0] ][ possible[l][1] ]){
                    neighbors.push( possible[l] );
            }
        }
        console.log(neighbors);

        if(neighbors.length){
            var next = neighbors[Math.floor(Math.random() * neighbors.length)];
            console.log('\n\r// Of the available directions, randomly select one.\n\r//The selected cell to move to is: '+next+'\n\r');

            cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;
            console.log('cells[currentCell[0]][currentCell[1]][next[2]]: cells['+currentCell[0]+']['+currentCell[1]+']['+next[2]+'] = 1');

            cells[ next[0] ][ next[1] ][ next[3] ] = 1;
            console.log('cells[next[0]][next[1]][next[3]]: cells['+next[0]+']['+next[1]+']['+next[3]+'] = 1');

            unvisited[ next[0] ][ next[1] ] = false;
            console.log('unvis[next[0]][next[1]]: unvisited['+next[0]+']['+next[1]+'] = false');

            visited++;
            currentCell = [ next[0], next[1] ];
            console.log('\n\rcurrentCell: ' + currentCell+'\n\r-----------------');
            path.push(currentCell);
            console.log('');
        }else{
            currentCell = path.pop();
            console.log('\n\r// No neighbors found. CurrentCell: ' + currentCell+'\n\r-----------------\n\r');
        }
    }
    return cells;
}(4, 4);