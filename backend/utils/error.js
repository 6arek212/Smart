exports.notAuthorized = (err, res=null) => {
  console.log(err);
  if (res)
    res.status(401).json({
      message: 'Not Authorized',
      err
    })

}


exports.serverError = (err, res) => {
  console.log(err);

  res.status(500).json({
    message: 'Internal Server Error',
    err
  })

}


exports.errorMessage = (msg, code, res, err, cutomerMessage) => {
  if (err)
    console.log(err);

  if (cutomerMessage)
    return res.status(code).json({
      message: msg
    })
  else {
    return res.status(code).json({
      message: msg,
      cutomerMessage
    })
  }
}
