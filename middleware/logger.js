const consoleLog = true;
const jsonLog = false;
const logger = (req, res, next) => {
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const { remoteAddress, remoteFamily } = socket;
  if (consoleLog) {
    console.log(`RemoteAddress: ${remoteAddress}`);
    console.log(`RemoteFamily: ${remoteFamily}`);
    console.log(`Method:  ${method}`);
    console.log(`URL: ${url}`);
    console.log(`HttpVersion:  HTTP/${httpVersion}`);
    console.log(`Headers: ${JSON.stringify(rawHeaders)}`);
  }
  if (jsonLog) {
    console.log(
      JSON.stringify({
        timestampe: Date.now(),
        rawHeaders,
        httpVersion,
        method,
        remoteAddress,
        remoteFamily,
        url,
      })
    );
    next();
  }
};

export default logger;
