### Creating execution role

```
aws iam create-role --role-name lambda-ex --assume-role-policy-document file://trust-policy.json
```

### Attaching policies to role

```
aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
```

### Creating a Lambda Function

```
aws lambda create-function --function-name my-function \
--zip-file fileb://function.zip --handler index.handler --runtime nodejs12.x \
--role arn:aws:iam::<account number>:role/lambda-ex
```

### Invoking the Lambda Function

```
aws lambda invoke --function-name my-function out --log-type Tail
```

```
aws lambda invoke --function-name my-function out --log-type Tail \
--query 'LogResult' --output text |  base64 -d
```

### Listing Lambda Functions

```
aws lambda list-functions --max-items 10
```

### Deleting Lambda Functions

```
aws lambda delete-function --function-name my-function
```
