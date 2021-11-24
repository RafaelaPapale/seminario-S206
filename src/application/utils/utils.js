const { StatusCodes } = require('http-status-codes');

const Constants = require('./constants');

const Utils = {
    responseStatus(data) {
      switch (data) {
        case undefined:
          return StatusCodes.OK;
        case Constants.ERR_Validation.name:
          return StatusCodes.BAD_REQUEST;
        case Constants.ERR_NOT_FOUND.name:
          return StatusCodes.NOT_FOUND;
        default:
          return StatusCodes.INTERNAL_SERVER_ERROR;
      }
    },
  };
  
  module.exports = Utils;