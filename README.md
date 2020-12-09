# CI/CD for serverless applications

In this repository you will find a deployment pipeline and 2 AWS SAM demo projects.

If you want to setup your pipeline you can read the [pipeline documentation](/pipeline/Pipeline-instructions.md)

## Run the project


- from the terminal, go to `pipeline` directory
- execute the below command to create the cloudformation stack for code pipeline
    ```bash
    aws cloudformation create-stack \
        --stack-name demo-cicd-pipeline \
        --template-body file://pipeline.yml \
        --capabilities CAPABILITY_NAMED_IAM
    ```

- if there is any change made to the file `pipeline.yml`, run the below command to update the pipeline stack:
    ```bash
    aws cloudformation update-stack \
        --stack-name demo-cicd-pipeline \
        --template-body file://pipeline.yml \
        --capabilities CAPABILITY_NAMED_IAM    
    ```

- if you want to delete the stack, run the below command
    ```bash
    aws cloudformation delete-stack --stack-name demo-cicd-pipeline
    ```


## Simple App project

This is a simple test project. This will be the AWS SAM project we will be deploying using the pipeline.

This project contains the buildspec and also it has configuration for safe deployments using AWS CodeBuild

### Some useful info:
    - get URL for a function
        - aws console > Services > API Gateway > Click on the first API (after sorting by the decreasing order of created date)
        - left menu > Stages > prod > see the Invoke URL

    - see the linear deployment
        - aws console > Services > CodePipeline > Left menu > Deploy > Deployments > Click the first one from the list


