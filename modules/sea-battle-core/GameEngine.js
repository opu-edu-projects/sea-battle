/**
 * Created by salterok on 1/24/2016.
 */

"use strict";

class GameEngine {
    constructor(player1, player2) {
        this._isGameReady = false;
        this._state = {
            [player1]: {},
            [player2]: {}
        };

    }

    initGameField(ships, playerId) {

        return true;
    }

    /**
     * Init game (select random starting player, etc.)
     */
    initGame() {

    }

    get isGameReady() {
        return this._isGameReady;
    }

    get currentPlayerId() {

    }

    get nextPlayerId() {

    }

    getGameField(playerId) {

    }

    getShipsInfo(playerId) {

    }

    shoot(attackerId, x, y) {

    }

}

module.exports = GameEngine;
