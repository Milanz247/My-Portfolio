# Deployment Setup

This project uses GitHub Actions for automatic deployment to your server via SFTP.

## Required GitHub Secrets

To enable automatic deployment, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these secrets:

### Required Secrets:

- `FTP_SERVER`: Your server hostname/IP address
- `FTP_USERNAME`: Your SFTP username  
- `FTP_PASSWORD`: Your SFTP password

### Example values:
```
FTP_SERVER: your-server.com
FTP_USERNAME: techcue360-milan-dev
FTP_PASSWORD: your-secure-password
```

## Deployment Process

The deployment happens automatically when you push to the `main` branch:

1. **Build**: The workflow builds your Next.js application with static export
2. **Debug**: Lists the contents of the build directory for troubleshooting
3. **Deploy**: All files from the `build/` directory are uploaded to `/home/techcue360-milan-dev/htdocs/milan-dev.techcue360.com/`

## Technical Details

- **Upload Method**: SCP (Secure Copy Protocol) over SSH
- **Port**: 22 (standard SSH/SCP port)
- **Source**: All contents of `build/` directory
- **Target**: `/home/techcue360-milan-dev/htdocs/milan-dev.techcue360.com/`
- **Concurrency**: 20 simultaneous transfers for faster upload

## Manual Deployment

If you need to deploy manually, you can:

1. Build the project locally:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `./build/` directory

3. Upload the contents of the `build` folder to your server

## Troubleshooting

- Ensure your server supports SFTP on port 22
- Verify the remote path exists on your server
- Check that your credentials have write permissions to the target directory
- Review the GitHub Actions logs for detailed error messages
