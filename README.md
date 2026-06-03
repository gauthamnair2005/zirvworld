# zirvworld — MOSIX Standard & Reference Documentation

Canonical specification and website for the **MOSIX** (Modern OSIX) operating
system standard, with [Zirvium](https://github.com/gauthamnair2005/zirvium) as
the reference implementation.

Flat HTML site — one page per section, no frameworks, no build step.

## Pages

| Page | Path | Content |
|------|------|---------|
| Home | [`index.html`](./index.html) | MOSIX standard overview, Zirvium ecosystem |
| MOSIX Standard | [`standard.html`](./standard.html) | Full MOSIX specification (FS hierarchy, syscall ABI, /zirv namespace) |
| Ecosystem | [`projects.html`](./projects.html) | All ecosystem projects |
| Architecture | [`architecture.html`](./architecture.html) | Memory, processes, syscalls, GDT, IPC, VFS, drivers |
| DisplayJet | [`displayjet.html`](./displayjet.html) | MAEM-encrypted display driver reference |
| ZirvUI | [`zirvui.html`](./zirvui.html) | Desktop compositor linking ZirvTK |
| ZirvTK | [`zirvtk.html`](./zirvtk.html) | Rust desktop toolkit & widget library |
| ZirvFlux | [`zirvflux.html`](./zirvflux.html) | Display framework library (Mesa-like) |
| Changelog | [`changelog.html`](./changelog.html) | Release history |
| Distributions | [`distributions.html`](./distributions.html) | How to build a MOSIX distribution |
| Download | [`download.html`](./download.html) | Source repos, build instructions |
| User Docs | [`user.html`](./user.html) | Building, running in QEMU, ZirvShell usage |
| Developer Docs | [`dev.html`](./dev.html) | Toolchain, syscall ABI, porting guide |
| Contributing | [`contributing.html`](./contributing.html) | How to contribute to MOSIX |

## Style

All pages share a single [`style.css`](./style.css) with consistent header nav.

## Ecosystem Repos

| Repo | Role |
|------|------|
| [zirvium](https://github.com/gauthamnair2005/zirvium) | Reference MOSIX kernel (x86-64) |
| [zirvlibc](https://github.com/gauthamnair2005/zirvlibc) | Freestanding C library |
| [zirvinit](https://github.com/gauthamnair2005/zirvinit) | PID 1 init |
| [zirvshell](https://github.com/gauthamnair2005/zirvshell) | Interactive shell |
| [zirvutils](https://github.com/gauthamnair2005/zirvutils) | System utilities |
| [zirvdisplayjet](https://github.com/gauthamnair2005/zirvdisplayjet) | MAEM-encrypted display driver |
| [zirvflux](https://github.com/gauthamnair2005/zirvflux) | Display framework library |
| [zirvtk](https://github.com/gauthamnair2005/zirvtk) | Rust desktop toolkit & compositor |
| [zirvui](https://github.com/gauthamnair2005/zirvui) | Desktop compositor (links ZirvTK) |

## Deployment

Push to `main` — GitHub Pages serves from the root.

## License

GPLv3
