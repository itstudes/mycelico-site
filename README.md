````md
# Tremor – Solar

`Solar` is a website template from [Tremor](https://tremor.so).  
It is built using **Next.js** and **Tremor UI components**.

This guide is written for **non-technical users on Windows** and walks you through everything step by step.

---

## What you need before you start

### 1) Install Node.js (required)

- Go to: https://nodejs.org
- Download and install the **LTS version** (recommended)
- During installation, keep the default options checked

After installation, restart your computer.

---

## Getting the project running (Windows)

### 2) Open a terminal (run as Administrator)

Recommended: **Windows Terminal** (best experience)  
Alternative: **PowerShell**

**How to open as Administrator:**
- Press **Start**
- Search for **Windows Terminal** (or **PowerShell**)
- Right-click → **Run as administrator**

---

### 3) Allow running required scripts (one-time setup)

In the Administrator terminal, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
````

> This allows locally installed tools (like Node/npm/pnpm) to run correctly in PowerShell.

---

### 4) Install pnpm (package manager)

Still in the terminal, run:

```powershell
corepack enable
corepack prepare pnpm@latest --activate
```

Confirm it worked:

```powershell
pnpm -v
```

You should see a version number.

---

### 5) Open the project folder

Navigate to the folder where this project was downloaded/cloned.

Example:

```powershell
cd path\to\the\project
```

Tip: In File Explorer, open the project folder, then click the address bar and copy the folder path.

---

### 6) Install project dependencies

Run:

```powershell
pnpm install
```

This may take a few minutes the first time.

---

### 7) Important one-time step (required on Windows)

Run:

```powershell
pnpm approve-builds
```

When prompted:

* **Select all**
* Press **Enter** to approve

---

### 8) Start the website

Run:

```powershell
pnpm run dev
```

---

### 9) Open the website in your browser

Go to:

```
http://localhost:3000
```

You should now see the website running 🎉

---

## Stopping the site

To stop the development server:

* Go back to the terminal window
* Press **Ctrl + C**
* Confirm if asked

---

## Notes

* This project uses Next.js’ built-in font optimization
* UI components are provided by Tremor
* Changes you make to the code will automatically refresh in the browser

---

## License

This site template is a commercial product and is licensed under the
[Tremor License](https://blocks.tremor.so/license).

---

## Learn more (optional)

If you want to learn more about the tools used:

* [Tailwind CSS](https://tailwindcss.com)
* [Next.js Documentation](https://nextjs.org/docs)
* [Radix UI](https://www.radix-ui.com)