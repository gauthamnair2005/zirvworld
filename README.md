# zirvworld — MOSIX Standard & Reference Documentation

Canonical specification and website for the **MOSIX** (Modern OSIX) operating
system standard, with [Zirvium](https://github.com/gauthamnair2005/zirvium) as
the reference implementation.

Flat HTML site — one page per section, no frameworks, no build step. 90s
kernel.org aesthetic (white background, serif text, blue links, monospace code,
tables for layout).

## Pages

| Page | Path | Content |
|------|------|---------|
| Home | [`index.html`](./index.html) | MOSIX standard overview, Zirvium ecosystem |
| MOSIX Standard | [`standard.html`](./standard.html) | Full MOSIX specification (FS hierarchy, syscall ABI, /zirv namespace) |
| Ecosystem | [`projects.html`](./projects.html) | All 12+ ecosystem projects |
| Architecture | [`architecture.html`](./architecture.html) | Memory, processes, 24 syscalls, GDT, IPC, VFS, drivers |
| DisplayJet | [`displayjet.html`](./displayjet.html) | MAEM-encrypted display driver reference, 11 syscalls |
| ZirvUI | [`zirvui.html`](./zirvui.html) | Desktop compositor protocol, bitmap font |
| Distributions | [`distributions.html`](./distributions.html) | How to build a MOSIX distribution |
| Download | [`download.html`](./download.html) | Source repos, build instructions, directory tree |
| User Docs | [`user.html`](./user.html) | Building, running in QEMU, ZirvShell usage, 17 utilities, FAQ |
| Developer Docs | [`dev.html`](./dev.html) | Toolchain, syscall ABI, porting guide, distribution guide |
| Contributing | [`contributing.html`](./contributing.html) | How to contribute to MOSIX |

## Style

All pages share a single [`style.css`](./style.css) with consistent header nav.

## Ecosystem Repos

| Repo | Role |
|------|------|
| [zirvium](https://github.com/gauthamnair2005/zirvium) | Reference MOSIX kernel (x86-64) |
| [zirvlibc](https://github.com/gauthamnair2005/zirvlibc) | Freestanding C library (reference userspace ABI) |
| [zirvinit](https://github.com/gauthamnair2005/zirvinit) | PID 1 init (banner + exec shell) |
| [zirvshell](https://github.com/gauthamnair2005/zirvshell) | Interactive shell (19 commands) |
| [zirvutils](https://github.com/gauthamnair2005/zirvutils) | System utilities (17 binaries) |
| [zirvdisplayjet](https://github.com/gauthamnair2005/zirvdisplayjet) | MAEM-encrypted display driver |
| [zirvui](https://github.com/gauthamnair2005/zirvui) | Desktop compositor |

## Deployment

Push to `main` — GitHub Pages serves from the root.
