
# GitHub Deployment Guide for "For Tara Always"

## Step 1: Create a GitHub Repository

**Go to [github.com](https://github.com) and click the "+" in the top-right corner, then "New repository".**  
![Create Repo](./1_github_home_create_repo.png)

- Name your repo: `for-tara-always`
- Leave it public or private
- **Do not** add a README or other files
- Click "Create repository"

---

## Step 2: Copy the Repository URL  
Copy the HTTPS link shown after creation.  
![Copy Repo URL](./3_copy_repo_url.png)

---

## Step 3: Push Your Local Project  
Open your terminal in your project folder and run these commands:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/for-tara-always.git
git push -u origin main
```

![Git Init](./4_terminal_git_init.png)

---

## Step 4: Done  
Your code is now live on GitHub.  
![Git Push Complete](./5_git_push_done.png)

You’re ready to deploy to **Vercel** next.

For Tara, always. ❤️
