# Environment Variables Setup

This document explains how to set up the required environment variables for the kenduigraha.com portfolio website.

## Required Files

1. Copy `.env.example` to `.env.local`
2. Fill in your actual values in `.env.local`

## Environment Variables

### Email Configuration (Contact Form)

The contact form can work with either **Formspree** (recommended) or **Nodemailer**.

#### Option 1: Formspree (Recommended - No server required)
\`\`\`env
FORMSPREE_FORM_ID=your-form-id-here
\`\`\`

**Setup Steps:**
1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy the form ID (e.g., `mwpblwgd`)
5. Add it to your `.env.local`

**Current form ID in use:** `mwpblwgd` (already configured in the contact page)

#### Option 2: Nodemailer (Requires email app password)
\`\`\`env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
\`\`\`

**Setup Steps for Gmail:**
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this app password (not your regular password)

### GitHub API Token (Optional)

Improves GitHub stats loading and increases rate limits.

\`\`\`env
GITHUB_TOKEN=your-github-token
\`\`\`

**Setup Steps:**
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes: `public_repo` (for public repository access)
4. Copy the generated token
5. Add it to your `.env.local`

**Benefits:**
- Higher API rate limits (5,000 requests/hour vs 60/hour)
- More reliable GitHub stats loading
- Reduced rate limiting errors

### Site URL

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://kenduigraha.com
\`\`\`

This is used for:
- SEO meta tags
- Canonical URLs
- Social media sharing

## Deployment

### Vercel
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable from your `.env.local`
4. Redeploy your application

### Other Platforms
Add the environment variables through your hosting platform's dashboard or CLI.

## Security Notes

- Never commit `.env.local` to version control
- Use strong, unique passwords
- Regularly rotate API tokens
- Use app passwords instead of main account passwords
- Keep your GitHub token secure and don't share it

## Troubleshooting

### Contact Form Issues
- **Formspree**: Check if the form ID is correct and the form is active
- **Nodemailer**: Verify email credentials and app password

### GitHub Stats Not Loading
- Check if `GITHUB_TOKEN` is set correctly
- Verify the token has `public_repo` scope
- Check GitHub API rate limits

### Environment Variables Not Loading
- Ensure `.env.local` is in the project root
- Restart your development server after adding variables
- Check for typos in variable names
