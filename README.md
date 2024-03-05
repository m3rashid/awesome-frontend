### Awesome

- Awesome follows a multi-tenannt architecture, where data is segregated at the database level.
- It keeps each tenant data separate in separate databases (keeping in mind, the compliance to common data-protection policies).
- It also provides a multi-tenant admin web app, where the admin can manage all the tenants, users, roles, permissions, etc.
- It also provides a multi-tenant web app, where the tenants can manage their own data.

---

### Setting up the project locally

- Make sure you have nodejs installed v20 LTS
- Go to the frontend folder and run `pnpm i` to install all the dependencies
- `cd web` and run `pnpm dev` to start the web app

---

### Project Structure

1. Built with Typescript and React
2. Modular Architecture with prime focus on Reusability and de-duplication
3. Authentication and Authorization with Multi-tenancy support
4. Package management for code reuse between admin web and tenant web
5. Shippable as a standalone native desktop app (Windows, Linux, MacOS)
6. Auto-pick the correct node version on directory change
7. State management, API calls, form management etc. set up and ready to use
8. Services for API calls handling all the boilerplate code for authorization, error handling, etc, typescript-typed responses etc.
9. Microsoft Fluent UI for UI components
10. React Router for routing

---

### Coming Soon

1. Dashboard Builder with custom data and widgets
2. ETL (Extract, Transform, Load) for seamless data migration
3. CLI to generate modules, models, controllers, etc
4. Bundling the whole project as a low code tool for non-technical users
5. More granular and configurable permissions management
6. Configurable and runtime user-defined workflows based on server actions and event driven architecture
