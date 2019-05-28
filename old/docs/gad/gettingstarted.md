# Getting Started

stool comes with a fully featured deployment system. It works via webhooks. You will get a custom url for each repository and whenever a requests comes in stool will execute your deployment script. When you initalize the repository a script called deploy_stool.sh will be copied to the root directory. There are some sample commands included as git pull and composer install.

### Error Handling
After the deployment script was executed the exit code will be checked. If an error happended an email will be send to the admisitration email with all relevant data. FYI: The script will be executed with the -e flag. That means that if a command fails the whole execution stops. This is helpful if you have any test runs and additional build steps such as caching. The caching will not be executed if the tests fail.

### Rollback
Important to know is that when your script fails the repository will be reseted to the original state. A backup will be created in the beginning and restored in case of failure. In the end it will be deleted.
