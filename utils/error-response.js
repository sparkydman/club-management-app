class ErrorResponse extends Error {
  constructor(path, message, status) {
    super();
    this.path = path;
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;
