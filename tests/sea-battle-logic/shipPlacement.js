/**
 * Created by salterok on 1/24/2016.
 */

"use strict";

var assert = require("assert");

var GameEngine = require("../../modules/sea-battle-core/GameEngine");

const player1 = "12345678";
const player2 = "87654321";


const validShips = [
    { sx: 5, sy: 7, spany: 4 }, // 4x
    { sx: 3, sy: 4, spany: 3 }, // 3x
    { sx: 6, sy: 2, spanx: 3 }, // 3x
    { sx: 2, sy: 9, spany: 2 }, // 2x
    { sx: 7, sy: 8, spany: 2 }, // 2x
    { sx: 9, sy: 4, spany: 2 }, // 2x
    { sx: 2, sy: 2 }, // 1x
    { sx: 1, sy: 6 }, // 1x
    { sx: 7, sy: 6 }, // 1x
    { sx: 9, sy: 10 } // 1x
];



describe("Ship placement", () => {
    it("Valid placement", () => {
        let game = new GameEngine(player1, player2);
        let result = game.initGameField(validShips, player1);
        assert.equal(result, true);
    });
});
