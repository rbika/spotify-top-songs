# My Top Songs

![](https://github.com/rbika/my-top-songs/workflows/Prod%20Continuous%20Deployment/badge.svg) ![](https://github.com/rbika/my-top-songs/workflows/Staging%20Continuous%20Deployment/badge.svg)

Discover what songs you've been listening to the most on Spotify.

[mytopsongs.site](https://mytopsongs.site)

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Create a `.env` file at the root of the project and add the following content:
    ```
    REACT_APP_BASE_URL=http://localhost:3000
    REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
    ```

2. Run the development server:
    ```
    npm start
    ```

3. The app will be running on http://localhost:3000.

## Deployment config

### AWS IAM Policy and User

1. Create a new AIM Policy named `my-top-songs-deploy-policy`. Paste the following JSON:
    ```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "VisualEditor0",
                "Effect": "Allow",
                "Action": [
                    "s3:PutObject",
                    "s3:GetObject",
                    "s3:ListBucket",
                    "s3:DeleteObject"
                ],
                "Resource": [
                    "arn:aws:s3:::mytopsongs.site/*",
                    "arn:aws:s3:::mytopsongs.site"
                ]
            }
        ]
    }
    ```
1. Create a new user named `my-top-songs-deploy` with *Programmatic access* type.
1. Choose *Attach existing policies directly* and select the policy created in the step 1.
1. Copy the Access Key ID and Secret access key somewhere safe.

### AWS S3

1. Create a new bucket named `mytopsongs.site`.
1. Click on the bucket name do edit it.
1. Select *Permissions* → *Block public access*, then uncheck *Block all public access* and save.
1. Select *Permissions* → *Bucket Policy*. Paste the following JSON.
    ```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicRead",
                "Effect": "Allow",
                "Principal": "*",
                "Action": [
                    "s3:GetObject",
                    "s3:GetObjectVersion"
                ],
                "Resource": "arn:aws:s3:::mytopsongs.site/*"
            }
        ]
    }
    ```
1. *Select Properties* → *Static website hosting* → *Use this bucket to host a website*.
1. In *Index document* type `index.html`.
1. Create another bucket and name it `www.mytopsongs.site`.
1. *Select Properties* → *Static website hosting* → *Check Redirect requests*.
1. In *Target bucket or domain* type `mytopsongs.site`

### Github configurations

1. In the Github project's page, go to *Settings* → *Secrets* → *Add new secret*.
1. Add the following secrets
    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY
    - SPOTIFY_CLIENT_ID
