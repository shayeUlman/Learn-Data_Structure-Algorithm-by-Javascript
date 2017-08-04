/* Tower of Hanoi implementation in Javascript(ES6) */

// This function will recursively store all the moves and return the moves information as Array
const hanoi = (count, source, aux, destination, moves = []) => {
    // When there is only single disk move it from 'source' to 'destination'
    if (count === 1) {
      moves.push({
          'disk': 1,
          'from': source,
          'to': destination
      });
    }
    else {
        // Move 'n-1' disks from 'source' to 'aux'
        hanoi(count - 1, source, destination, aux, moves);

        // Move n-th disk from 'source' to 'detination'
        moves.push({
          'disk': count,
          'from': source,
          'to': destination
        });

        // Move (n-1) disks from 'aux' to 'destination'
        hanoi(count - 1, aux, source, destination, moves);
    }
    return moves;
}

module.exports = hanoi