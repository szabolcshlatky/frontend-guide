# Node.js, npm, nvm, and Package Management on Windows 11

A practical guide for setting up and managing Node.js development on Windows 11, including installation, package management, and clean uninstallation.

---

## 1. Downloading and Installing Node.js (Current or LTS)

- **Official Node.js Website:**
  - Go to [https://nodejs.org/](https://nodejs.org/)
  - Download the **LTS** (recommended for most users) or **Current** version for Windows.
  - Run the installer. It will also install **npm** (Node Package Manager) by default.

- **Chocolatey (Optional):**
  - Chocolatey is a Windows package manager. The Node.js installer can optionally install Chocolatey, which can then be used to install other tools (like Python, Visual Studio Build Tools).
  - If you want Chocolatey, check the option during Node.js installation, or install it later from [https://chocolatey.org/install](https://chocolatey.org/install).

---

## 2. Installing and Using nvm (Node Version Manager)

- **Why nvm?**
  - nvm allows you to easily switch between multiple Node.js versions.

- **Install nvm with Chocolatey:**
  - Open **PowerShell** as Administrator (recommended for choco commands):

```powershell
    choco install nvm
```

- Alternatively, use **Command Prompt** as Administrator. Git Bash is not recommended for choco commands.

- **Basic nvm usage:**

```bash
# Install the latest Node.js version
nvm install latest
# Install the latest LTS (Long Term Support) version
nvm install lts
# Install a specific Node.js version
nvm install 18.18.2
# Switch to a version
nvm use 18.18.2
# List installed versions
nvm list
# Remove a version
nvm uninstall 18.18.2
```

---

## 3. Managing Global npm Packages

- **Check global packages:**

```bash
    npm list -g --depth=0
    ```

- **If you have folder issues (e.g., permission errors):**
  - Ensure your global npm directory exists and is writable:

```bash
    mkdir -p "$HOME\AppData\Roaming\npm"
    mkdir -p "$HOME\AppData\Roaming\npm-cache"
```

- You can configure npm to use these folders:

```bash
    npm config set prefix "$HOME\AppData\Roaming\npm"
    npm config set cache "$HOME\AppData\Roaming\npm-cache"
    ```

- **Install global packages:**

```bash
    npm install -g yarn pnpm
    yarn --version
    pnpm --version
    ```

- **Uninstall global packages:**

```bash
    npm uninstall -g <package>
    # Example: npm uninstall -g yarn
    # Uninstall all (not recommended): npm ls -g --parseable --depth=0 | tail -n +2 | xargs npm -g rm
    ```

---

## 4. Creating Projects and Managing Packages

- **Create a new project:**

```bash
    mkdir my-app && cd my-app
    npm init -y         # With npm
    yarn init -y        # With yarn
    pnpm init -y        # With pnpm
    ```

- **Install packages (project-level):**
    ```bash
    npm install express nodemon
    yarn add express nodemon
    pnpm add express nodemon
    ```

- **Uninstall packages:**
    ```bash
    npm uninstall express nodemon
    yarn remove express nodemon
    pnpm remove express nodemon
    ```

- **What is express?**
  - [Express](https://expressjs.com/) is a fast, minimal web framework for Node.js, used to build web servers and APIs.

- **What is nodemon?**
  - [Nodemon](https://nodemon.io/) is a tool that automatically restarts your Node.js application when file changes are detected, making development faster.

---

## 5. Uninstalling Node.js, nvm, and npm

- **Uninstall via Control Panel:**
  - Go to **Settings > Apps > Installed apps** (or **Control Panel > Programs and Features**)
  - Uninstall **Node.js** and **nvm** if present.

- **Delete leftover folders:**
  - Check and delete (if present):
    - `C:\Program Files\nodejs`
    - `C:\Users\<YourUser>\AppData\Roaming\npm`
    - `C:\Users\<YourUser>\AppData\Roaming\nvm`
    - `C:\Users\<YourUser>\AppData\Roaming\npm-cache`
    - Any other related folders

- **Remove from PATH:**
  - Open **System Properties > Environment Variables**
  - Remove any Node.js, npm, or nvm entries from the `PATH` variable.

---

**Tip:** For most package management and nvm commands, PowerShell or Command Prompt is recommended on Windows. Use Git Bash for Unix-like scripting, but avoid it for Chocolatey or nvm-windows commands.

---

*Happy coding!*
