# Deployment Guide

This project uses GitHub Actions for automated CI/CD deployment to a CloudPanel Ubuntu VPS.

## Deployment Architecture

The deployment follows a **zero-downtime strategy**:

1. **Build Phase**: Code is built using Bun in GitHub Actions
2. **Safe Upload**: Built files are uploaded to a temporary directory on the server
3. **Atomic Deployment**: Files are moved from temp to live directory in a single operation
4. **Backup & Rollback**: Previous version is automatically backed up
5. **Verification**: Deployment is verified by testing site accessibility

## Workflow Features

### 🚀 **Zero-Downtime Deployment**
- Files are uploaded to a temp directory first
- Live site remains operational during upload
- Atomic move operation minimizes downtime to milliseconds

### 📦 **Automatic Backups**
- Creates timestamped backups before each deployment
- Keeps last 5 backups for easy rollback
- Backup format: `backup_YYYYMMDD_HHMMSS`

### 🔒 **Security & Permissions**
- Proper file permissions are set automatically
- SFTP encryption for secure file transfer
- Credentials stored securely in GitHub Secrets

### 🐛 **Error Handling & Debugging**
- Comprehensive error checking at each step
- Debug information available on failure
- Deployment verification after completion

## Required GitHub Secrets

Set these in your GitHub repository settings under **Settings > Secrets and variables > Actions**:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `FTP_SERVER` | Your server hostname/IP | `your-server.com` |
| `FTP_USERNAME` | SSH/SFTP username | `your-username` |
| `FTP_PASSWORD` | SSH/SFTP password | `your-password` |

## Server Requirements

### CloudPanel VPS Setup
1. **SSH/SFTP Access**: Port 22 must be open
2. **Directory Structure**: 
   ```
   /home/your-username/htdocs/your-domain.com/
   ```
3. **Permissions**: User must have write access to web directory

### File Permissions
The workflow automatically sets:
- Files: `644` (readable by all, writable by owner)
- Directories: `755` (executable/readable by all, writable by owner)

## Deployment Process

### Automatic Deployment
1. Push code to `main` branch
2. GitHub Actions automatically triggers
3. Build completes in ~2-3 minutes
4. Deployment completes in ~30 seconds
5. Site is immediately live with new changes

### Manual Deployment
```bash
# Trigger deployment manually
git push origin main
```

## Monitoring & Troubleshooting

### Check Deployment Status
1. Go to **Actions** tab in your GitHub repository
2. View the latest workflow run
3. Check each step for success/failure

### Common Issues & Solutions

#### Build Failures
```bash
# Local testing
bun install
bun run build
```

#### Upload Failures
- Verify server credentials in GitHub Secrets
- Check server SSH access (port 22)
- Ensure sufficient disk space on server

#### Permission Issues
```bash
# On server, fix permissions manually
cd /home/your-username/htdocs/your-domain.com/
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
```

#### Rollback to Previous Version
```bash
# SSH to server
cd /home/your-username/htdocs/your-domain.com/
ls backup_*  # List available backups
cp -r backup_YYYYMMDD_HHMMSS/* .  # Restore from backup
```

## Performance & Optimization

### Build Optimization
- Next.js static export for optimal performance
- Bun for faster builds compared to npm/yarn
- Automatic optimization of images and assets

### Deployment Speed
- **Upload**: ~20-30 seconds (depends on build size)
- **Downtime**: <1 second (atomic file move)
- **Total Time**: ~2-3 minutes (including build)

## Security Best Practices

1. **Never commit credentials** to the repository
2. **Use strong passwords** for server access
3. **Regularly update dependencies** for security patches
4. **Monitor deployment logs** for suspicious activity
5. **Keep backups** for quick recovery

## Advanced Configuration

### Custom Deployment Path
Edit `.github/workflows/deploy.yml`:
```yaml
remote_path: '/your/custom/path/temp_deploy/'
```

### Additional File Types
Add to the permissions section:
```bash
find . -type f -name "*.your-extension" | xargs chmod 644
```

### Deployment Notifications
Add Slack/Discord notifications to the workflow for deployment status.

---

## Quick Start Checklist

- [ ] Add GitHub Secrets (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Ensure server SSH access (port 22)
- [ ] Test local build: `bun run build`
- [ ] Push to main branch
- [ ] Monitor GitHub Actions
- [ ] Verify site is live

Your portfolio is now automatically deployed! 🎉
