const { StatusCodes } = require('http-status-codes');

const Constants = require('./constants');

const Utils = {
  responseStatus(data) {
    switch (data) {
      case undefined:
        return StatusCodes.OK;
      case Constants.ErrorValidation.name:
        return StatusCodes.BAD_REQUEST;
      case Constants.ErrorDuplicate.name:
        return StatusCodes.BAD_REQUEST;
      case Constants.ErrorNotFound.name:
        return StatusCodes.NOT_FOUND;
      default:
        return StatusCodes.OK;
    }
  },
};

module.exports = Utils;