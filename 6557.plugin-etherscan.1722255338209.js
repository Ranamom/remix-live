"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6557],{

/***/ 36557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\nimport \"remix_tests.sol\"; // this import is automatically injected by Remix.\nimport \"hardhat/console.sol\";\nimport \"../contracts/3_Ballot.sol\";\n\ncontract BallotTest {\n\n    bytes32[] proposalNames;\n\n    Ballot ballotToTest;\n    function beforeAll () public {\n        proposalNames.push(bytes32(\"candidate1\"));\n        ballotToTest = new Ballot(proposalNames);\n    }\n\n    function checkWinningProposal () public {\n        console.log(\"Running checkWinningProposal\");\n        ballotToTest.vote(0);\n        Assert.equal(ballotToTest.winningProposal(), uint(0), \"proposal at index 0 should be the winning proposal\");\n        Assert.equal(ballotToTest.winnerName(), bytes32(\"candidate1\"), \"candidate1 should be the winner name\");\n    }\n\n    function checkWinninProposalWithReturnValue () public view returns (bool) {\n        return ballotToTest.winningProposal() == 0;\n    }\n}");

/***/ })

}]);
//# sourceMappingURL=6557.plugin-etherscan.1722255338209.js.map