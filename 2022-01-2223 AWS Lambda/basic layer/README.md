### Uploading layer zip to s3

```
aws s3 cp test-module.zip s3://test-lambda-layer-zips/1/test-module.zip
```

### Publishing a layer from s3 via CLI

```
aws lambda publish-layer-version \
--layer-name my-layer \
--description "My layer"  \
--license-info "MIT" \
--content S3Bucket=test-lambda-layer-zips,S3Key=1/test-module.zip \
--compatible-runtimes nodejs14.x
```

### Deleting a layer version

```
aws lambda delete-layer-version --layer-name my-layer --version-number 1
```
