const errorHandler = (req, res, next) => {
    res.status(404).json({ 
      status: 404,
      message: 'Something went wrong! Please try after some time.'
     });
  };

  module.exports = errorHandler;