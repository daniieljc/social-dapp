const Migrations = artifacts.require("Post");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
