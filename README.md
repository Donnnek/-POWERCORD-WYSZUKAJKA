# Powercord - Wyszukajka

- **[Pokaz pluginu](https://streamable.com/uwu4au)**

# Jak pobrać plugin?

```bash
cd %HOMEPATH%\powercord\src\Powercord\plugins && git clone https://github.com/Donnnek/-POWERCORD-WYSZUKAJKA.git
```

# Jak pobrać PoweCord'a?

**Wymagane:**
- git – https://git-scm.com/downloads
- node i npm – https://nodejs.org
- Discord Canary (Powercord działa jedynie na "Discord Canary"!)
- Discord Canary - macOS: https://discord.com/api/download/canary?platform=osx
- Discord Canary - Windows: https://discord.com/api/download/canary?platform=win
- Discord Canary - Linux (deb): https://discord.com/api/download/canary?platform=linux
- Discord Canary - Linux (tar.gz): https://discord.com/api/download/canary?platform=linux&format=tar.gz

```bash
git clone https://github.com/powercord-org/powercord
cd powercord
npm i
npm run plug
powershell -Command "& {Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Close DiscordCanary using the taskbar', 'Please read', 'OK', [System.Windows.Forms.MessageBoxIcon]::Information);}"
cd %HOMEPATH%\powercord\src\Powercord\plugins && git clone https://github.com/redstonekasi/theme-toggler
cd %HOMEPATH%
```

# Jak pobrać plugin lub motyw?

- **Plugin:**
```bash
cd %HOMEPATH%\powercord\src\Powercord\plugins && git clone plugin-name
```

- **Motyw:**
```bash
cd %HOMEPATH%\powercord\src\Powercord\themes && git clone theme-name
```
