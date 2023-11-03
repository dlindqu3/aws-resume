## The Cloud Resume Challenge - AWS

- The website [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) describes a sample AWS cloud project that involves hosting a resume copy on AWS 
- The project is built with tools like S3, CloudFront, Lambda, API Gateway, DynamoDB, and AWS Severless Application Model (SAM) templates
- My iteration of the project will follow similar guidelines, but will add other services / capabilities as I see fit 

### Steps 
1. Budget & Budget Alerts 
  - Set up AWS Budgets alerts to notify me when costs exceed a certain thresholds per month 
  - Use root user to set up the budget 
2. Non-Root User 
  - Set up a non-root AWS account with access keys and administrator access and work from that account
  - This is more secure than working from the root account 
3. HTML Page, S3, and GitHub Actions   
  - Create an HTML file with Resume content 
  - Create an S3 bucket with settings "block all public access" and "enable versioning"
  - Add file .github/workflows/main.yaml to handle GitHub actions and automatic deployment to S3 


 ## Sources 
1. AWS Documentation, "Creating a cost budget", [link](https://docs.aws.amazon.com/cost-management/latest/userguide/create-cost-budget.html)
2. AWS Documentation, "Getting Set Up with IAM", [link](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-set-up.html) 
3. AWS Documentation, "Tutorial: Configuring a static website on Amazon S3", [link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html) 
4. John Kevin Losito, "Deploy static website to S3 using Github actions", [link](https://dev.to/johnkevinlosito/deploy-static-website-to-s3-using-github-actions-4a0e)
5. Alex Hyett, "GitHub Actions To S3", [link](https://www.youtube.com/watch?v=JffSxrjx_UM)