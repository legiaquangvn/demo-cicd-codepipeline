# CI/CD for serverless applications

In this repository you will find a deployment pipeline and 2 AWS SAM demo projects.

If you want to setup your pipeline you can read the [pipeline documentation](/pipeline/Pipeline-instructions.md)

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
