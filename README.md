# CI/CD for serverless applications

In this repository you will find a deployment pipeline and 2 AWS SAM demo projects.

If you want to setup your pipeline you can read the [pipeline documentation](/pipeline/Pipeline-instructions.md)

## Demo info:
- lambda functions:
    - list: https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions
    - execute
        - https://65t5xg1916.execute-api.us-east-1.amazonaws.com/prod/simple
        - https://lhrcf4wdy9.execute-api.us-east-1.amazonaws.com/Prod/        

    - deployment:
        - https://console.aws.amazon.com/codesuite/codedeploy/deployments/d-RY5BLQB18?region=us-east-1
    
    - dynamodb:
        - https://console.aws.amazon.com/dynamodb/home?region=us-east-1#tables:


## Test Lambda function

In the project 'integration-test-lambda' you will find a sample of a lambda function that you need to run integration tests in the pipeline.

Manually deploy this function first and get the name. Then with that name you can go and configure the pipeline SSM parameters.

## Simple App project

This is a simple test project. This will be the AWS SAM project we will be deploying using the pipeline.

This project contains the buildspec and also it has configuration for safe deployments using AWS CodeBuild

- gradually deploy functions with linear traffic from old version to a new version
    - ref: 
        - https://www.youtube.com/watch?v=Wd-xhOKkMcU
        - https://github.com/austinloveless/LambdaCI-CDDemo
        - https://www.wwt.com/video/cicd-for-aws-lambda
    - function: `HelloWorld` will be deployed linearly

## Get URL for a function
- aws console > Services > API Gateway > Click on the first API (after sorting by the decreasing order of created date)
- left menu > Stages > Stage > see the Invoke URL

## See the linear deployment
- aws console > Services > CodePipeline > Left menu > Deploy > Deployments > Click the first one from the list
- 

## Refs:

- https://www.youtube.com/watch?v=bnD_6lasWHs&t=6s
    - https://github.com/mavi888/demo-cicd-codepipeline

- https://www.youtube.com/watch?v=0o3urdBeoII&t=54s
    - https://github.com/aws-samples/cookiecutter-aws-sam-pipeline

- Deployment strategies:
    - https://www.youtube.com/watch?v=Wd-xhOKkMcU
        - https://github.com/austinloveless/LambdaCI-CDDemo

    - https://www.youtube.com/watch?v=r2BBoBnH3R0
    - https://www.youtube.com/watch?v=GqDrPqrCZSo
    - https://www.youtube.com/watch?v=RE4r_6edaXc

    
- Dynamodb:
    - https://github.com/austinloveless/AWSDenver-serverless/blob/master/src/lib/dynamodb.js
    - https://github.com/darpanpathak/AWS-SAM-Lambda-dynamoDB
    - https://www.youtube.com/watch?v=-ALooNnddOE
        - https://github.com/mavi888/sam-test-basic-project

- code-pipeline
    - https://github.com/stelligent/devops-essentials

- cdk:
    - static website: 
        - https://sbstjn.com/blog/deploy-react-cra-with-cdk-codepipeline-and-codebuild/
        - https://blogs.tensult.com/2020/01/07/build-codepipeline-for-a-static-website/
        - https://medium.com/@greeshu.renu/host-gatsby-js-site-on-amazon-s3-with-aws-codepipeline-675117686b9b
        - https://dzone.com/articles/continuous-delivery-to-s3-via-codepipeline-and-cod
            - https://github.com/stelligent/devops-essentials/blob/master/samples/static/pipeline.yml
        - https://medium.com/@kyle.galbraith/how-to-continuously-deploy-a-static-website-in-style-using-github-and-aws-3df7ecb58d9c

