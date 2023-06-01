module.exports = function parking(ships) {
  const parkingLot = [];
  const result = [];

  function rotateForm(form) {
    const rotatedForm = [];
    const width = form[0].length;

    for (let col = 0; col < width; col++) {
      const newRow = [];

      for (let row = form.length - 1; row >= 0; row--) {
        newRow.push(form[row][col]);
      }

      rotatedForm.push(newRow);
    }

    return rotatedForm;
  }

  function canPark(ship, position) {
    const width = ship.form[0].length;

    for (let row = 0; row < ship.form.length; row++) {
      for (let col = 0; col < width; col++) {
        if (
          (parkingLot[position + row] && parkingLot[position + row][col]) ||
          ship.form[row][col] === 0
        ) {
          return false;
        }
      }
    }

    return true;
  }

  function parkShip(ship, position, isRotated) {
    const width = ship.form[0].length;

    for (let row = 0; row < ship.form.length; row++) {
      for (let col = 0; col < width; col++) {
        if (ship.form[row][col] === 1) {
          parkingLot[position + row][col] = ship.id;
        }
      }
    }

    result.push({
      shipId: ship.id,
      position: position + 1,
      isRotated,
    });
  }

  // Sort ships by width in descending order
  ships.sort((a, b) => b.form[0].length - a.form[0].length);

  const parkingWidth = ships[0].form[0].length;

  // Initialize the parking lot
  for (let i = 0; i < ships.length; i++) {
    parkingLot.push(new Array(parkingWidth).fill(0));
  }

  for (const ship of ships) {
    let position = -1;
    let isRotated = false;

    while (position === -1 && !isRotated) {
      // Try to park the ship without rotation
      for (let col = 0; col <= parkingWidth - ship.form[0].length; col++) {
        if (canPark(ship, col)) {
          position = col;
          break;
        }
      }

      // If the ship couldn't be parked without rotation, try with rotation
      if (position === -1) {
        ship.form = rotateForm(ship.form);
        isRotated = true;
      }
    }

    parkShip(ship, position, isRotated);
  }

  return result;
};

/**
 * Задача аналогична построению цепочки домино и может быть решена с помощью поиска эйлерова пути в графе. 
 * Для небольших ограничений можно и бэктрекингом поподбирать
 */