# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

# Setting up the development environment for the project

# 🛠 Strapi Project Setup & Transfer Guide

This guide will walk you through setting up this Strapi project locally, including restoring the full PostgreSQL database so you can see all the existing content.

---

## ✅ Setup Checklist

### 1. Clone the Project

```bash
git clone https://github.com/your-org/your-strapi-project.git
cd your-strapi-project
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Set Up the PostgreSQL Database

#### ➊ Create a database:

```bash
createdb eric-backend
```

> You can change the database name, but make sure it matches your `.env` file.

#### ➋ Import the provided dump file:

```bash
psql -U your_pg_user -d eric-backend < strapi_dump.sql
```

Replace `your_pg_user` with your local PostgreSQL username.

---

### 4. Create and Configure `.env` File

Create a `.env` file in the project root with the content provided to you.

> ✅ You can generate secure keys using:
>
> ```bash
> openssl rand -base64 32
> ```

---

### 5. Admin Access

If no admin account exists, you'll be prompted to create one on first visit to `/admin`.  
Otherwise, use credentials provided separately, or reset using:

```bash
npx strapi admin:create-user
```

### 6. Run the Project

```bash
npm run develop
# or
yarn develop
```

Visit: [http://localhost:1337/admin](http://localhost:1337/admin)

---

### 7. Open the Admin Console in Your Browser

Once the project is running, open [http://localhost:1337/admin]http://localhost:1337/admin in your web browser to access the Strapi Admin Console. From there you will be able to modify all of the content.

### 8. Generate API token

In the admin console, under settings -> API tokens, generate a new token. You can then add that token to the .env of the front end that needs to access the strapi backend so that it can be authorized.
