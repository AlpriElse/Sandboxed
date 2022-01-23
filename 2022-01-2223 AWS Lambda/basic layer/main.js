const AdmZip = require("adm-zip");

const AWS_LAMBDA_LAYER_PREFIX = "nodejs/node_modules";

const zip = new AdmZip();
zip.addLocalFile("./index.js", `${AWS_LAMBDA_LAYER_PREFIX}/my-test-layer`);

zip.writeZip("test-module.zip");
