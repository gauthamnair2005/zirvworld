# zirvworld — Zirvium OS Website

The official website for the [Zirvium](https://github.com/gauthamnair2005/zirvium) operating system and its MOSIX ecosystem.

Flat HTML site — one page per section, no frameworks, no build step. 90s kernel.org aesthetic (white background, serif text, blue links, monospace code, tables for layout).

## Pages

| Page | Path | Content |
|------|------|---------|
| Home | [`index.html`](./index.html) | Landing page, project overview |
| Ecosystem | [`projects.html`](./projects.html) | Kernel, libc, init, shell, utilities |
| Architecture | [`architecture.html`](./architecture.html) | Memory, processes, syscalls, GDT, IPC, VFS, drivers |
| Download | [`download.html`](./download.html) | Source repos, build instructions |
| User Docs | [`user.html`](./user.html) | Building, running in QEMU, ZirvShell usage |
| Developer Docs | [`dev.html`](./dev.html) | Toolchain, syscall ABI, porting guide, userspace programs |

## Submodule Repos

- [zirvium](https://github.com/gauthamnair2005/zirvium) — x86-64 kernel
- [zirvlibc](https://github.com/gauthamnair2005/zirvlibc) — freestanding C library
- [zirvinit](https://github.com/gauthamnair2005/zirvinit) — PID 1 init
- [zirvshell](https://github.com/gauthamnair2005/zirvshell) — shell
- [zirvutils](https://github.com/gauthamnair2005/zirvutils) — command-line utilities

## Deployment

Push to `main` — GitHub Pages serves from the root.
