# About Project

Proyek ini menggunakan Docker untuk containerization, yang memungkinkan Anda untuk menjalankan aplikasi dalam lingkungan yang terisolasi. Berikut adalah langkah-langkah untuk menjalankan proyek ini dalam mode produksi dan pengembangan.

# Structure

```sh
root/
│-- .devcontainer/
│   │-- devcontainer.json
│-- apps/
│   │-- web/
│   │   -- .
│   │   -- .
│   │   -- .
│   │   -- Dockerfile
│   │-- docs/
│   │   -- .
│   │   -- .
│   │   -- .
│   │   -- Dockerfile
│   │-- web-majalah/
│   │   -- .
│   │   -- .
│   │   -- .
│   │   -- Dockerfile
│-- packages/
│-- docker-compose.yml
│-- turbo.json
│-- package.json
│-- pnpm-workspace.yaml
```

# Mode Dev

Berikut adalah penjelasan singkat untuk file `devcontainer.json`:

- image: Gambar Docker yang digunakan, `mcr.microsoft.com/devcontainers/typescript-node:0-20`
- waitFor: Menunggu hingga perintah `onCreateCommand` dijalankan.
- updateContentCommand: Diberikan perintah untuk memperbarui `node_modules`, `pnpm install`.
- postAttachCommand: Perintah setelah selesai instalasi, `pnpm dev`.
- customizations:
  - vscode:
    - Ekstensi yang diinstal: Code Spell Checker, ESLint, Prettier, Markdownlint, Remote Containers.
- portsAttributes:
  - `3000`, `3001`, `3002`: Port yang diteruskan dengan label "Application" dan membuka pratinjau otomatis.

File ini mengkonfigurasi lingkungan pengembangan dalam container Docker untuk konsistensi dan kemudahan pengaturan.

## Untuk menjalankan mode development menggunakan .devcontainer, ikuti langkah-langkah berikut:

1. Buka repo ini di Visual Studio Code: Pastikan Anda membuka folder proyek yang berisi file devcontainer.json.

2. Buka Command Palette: Tekan Cmd+Shift+P (di Mac) untuk membuka Command Palette.

3. Pilih Perintah untuk Membuka Folder dalam Container: Ketik dan pilih Remote-Containers: Reopen in Container.

4. Tunggu Hingga Container Dibuat dan Terhubung: Visual Studio Code akan membuat dan menghubungkan ke container berdasarkan konfigurasi di devcontainer.json.

5. Jalankan Perintah Pengembangan: Setelah terhubung, perintah pnpm dev akan dijalankan secara otomatis sesuai dengan konfigurasi postAttachCommand di devcontainer.json.

6. Akses Aplikasi: Aplikasi akan berjalan di port yang telah ditentukan (3000, 3001, 3002). Anda dapat mengaksesnya melalui browser:

- `web`: Aplikasi utama yang - berjalan di port 3000.
  [http://localhost:3000/](http://localhost:3000/)
- `docs`: Aplikasi dokumentasi yang berjalan di port 3001.
  [http://localhost:3001/](http://localhost:3001/)
- `web-majalah`: Aplikasi majalah yang berjalan di port 3002.
  [http://localhost:3002/](http://localhost:3002/)

# Production Mode

Contoh konfigurasi untuk layanan web:

```
services:
web:
  build:
    context: .
    dockerfile: ./apps/web/Dockerfile
  ports:
    - "3000:3000"
  environment:
    - NODE_ENV=production
```

# Evidences

![images](.img/images.png)
![runningcontainers](.img/runningcontainers.png)

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
