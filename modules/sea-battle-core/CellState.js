/**
 * Created by salterok on 1/24/2016.
 */

class CellState {
    constructor() {
        this.isKnown = false;
        this.hasShipPart = false;
        this.isReasonable = true;
        this.ship = null;
    }

}

module.exports = CellState;
