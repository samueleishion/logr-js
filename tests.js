const Logr = require('./src/logr');
const logr = new Logr();

logr.info("hello world");
logr.warning("this is a warning");
logr.error("something went wrong");
logr.success("now it's working!");
logr.data(["here", "is", "some", "array"]);
logr.data({"here is": "some object"});
