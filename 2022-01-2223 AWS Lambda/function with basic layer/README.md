Creating function with layer

```
aws lambda create-function --function-name my-function \
--zip-file fileb://./function.zip \
--handler index.handler \
--runtime nodejs12.x \
--layers arn:aws:lambda:us-east-2:<account number>:layer:my-layer:8 \
--role arn:aws:iam::<account number>:role/lambda-ex
```
