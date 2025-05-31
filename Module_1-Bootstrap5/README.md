# Bootstrap 5 Custom Sass Project

## Setup Instructions

1. Navigate to the project folder:

```bash
cd bootstrap-sass-project
```

2. Initialize npm and install dependencies:

```bash
npm init -y
npm install bootstrap sass
```

3. Compile Sass to CSS:

```bash
npx sass scss/custom.scss dist/custom.css
```

4. Open `index.html` in a browser to see the customized Bootstrap styles.

---

### Note:
- The `custom.scss` file overrides `$primary` and `$border-radius` variables before importing Bootstrap.
- You can customize more Bootstrap variables by adding them at the top of `custom.scss`.