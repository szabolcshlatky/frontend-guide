# WSL (Windows Subsystem for Linux) Guide for Windows 11

A practical guide for understanding, installing, and using WSL on Windows 11, with comparisons to Cygwin and tips for VS Code integration.

---

## 1. Cygwin vs. WSL

### What is Cygwin?

- **Cygwin** is a large collection of GNU and Open Source tools that provide functionality similar to a Linux distribution on Windows.
- It offers a POSIX-compatible environment that runs on top of Windows, but does not run a real Linux kernel.
- Download: [https://www.cygwin.com/](https://www.cygwin.com/)

### What is WSL?

- **WSL (Windows Subsystem for Linux)** is a compatibility layer for running native Linux binaries directly on Windows 10/11.
- WSL 2 uses a real Linux kernel in a lightweight virtual machine, providing much better compatibility and performance than Cygwin.
- Allows you to install and run full Linux distributions (like Ubuntu, Debian, etc.) alongside Windows.
- More info: [https://docs.microsoft.com/en-us/windows/wsl/](https://docs.microsoft.com/en-us/windows/wsl/)

---

## 2. How to Install and Uninstall WSL on Windows 11

### Install WSL (Recommended: WSL 2)

- Open **PowerShell** as Administrator and run:

    ```powershell
    wsl --install
    ```

- This installs WSL and the default Ubuntu distribution. You can choose other distributions later.
- To see available distributions:

    ```powershell
    wsl --list --online
    ```

- To install a specific distribution (e.g., Debian):

    ```powershell
    wsl --install -d Debian
    ```

### Uninstall WSL

- To uninstall a Linux distribution:

    ```powershell
    wsl --unregister <DistroName>
    # Example: wsl --unregister Ubuntu
    ```

- To remove WSL components:
  1. Go to **Settings > Apps > Optional Features** and remove "Windows Subsystem for Linux".
  2. Optionally, remove the "Virtual Machine Platform" feature if not needed.

---

## 3. Recommended VS Code Extension for WSL

- **Remote - WSL** (by Microsoft)
- Allows you to open any folder in the WSL filesystem and use VS Code as if you were on Linux.
- Install from the VS Code Marketplace:
  - [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

---

## 4. Using Linux Commands in VS Code Terminals

- **Git Bash**: Provides a bash shell with many Unix commands, but not a full Linux environment.
- **WSL Terminal**: When WSL is installed, you can open a terminal in VS Code and select your WSL distribution (e.g., Ubuntu) for a real Linux shell.
- **How to open WSL terminal in VS Code:**
  1. Open the integrated terminal (`Ctrl+\`` or`View>Terminal`).
  2. Click the dropdown arrow next to the plus (+) button and select your WSL distribution (e.g., Ubuntu).
  3. You can now run native Linux commands and tools.
- **Tip:** You can set your default terminal in VS Code to WSL for convenience.

---

*Happy coding with WSL!*
